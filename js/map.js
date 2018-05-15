//var map;
//var geojson;
var _map;		// debe ser unico, si existe no lo instancio

function map(statesData) {
	var obj = {};

	obj.initialized = false;
	obj.map = undefined;
	obj.statesData = statesData || undefined;
	obj.geoJson = undefined;
	obj.tag = "map";
	obj.point = [-41.48, -64.17];		// center argentina
	obj.zoom = 4;						// view all argentina
	obj.maxZoom = 18;
	obj.idSource = 'mapbox.streets';
	obj.mapSource = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
	obj.attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
					'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
					'Imagery © <a href="http://mapbox.com">Mapbox</a>'
	obj.typeMap = "polygon";		// type = polygon, point

	// inicializo el mapa
	obj.init =  function(tag, point, zoom) {

		if (obj.initialized)
			return this;

		obj.initialized = true;

		obj.tag = tag || obj.tag;
		obj.point = point || obj.point;
		obj.zoom = zoom || obj.zoom;

		if (_map === undefined) {
			obj.map = L.map(obj.tag).setView(obj.point, obj.zoom);

			L.tileLayer(obj.mapSource, {
								maxZoom: obj.maxZoom,
								attribution: obj.attribution,
								id: obj.idSource
							}
					).addTo(obj.map);
			_map = obj.map;
		} else
			obj.map = _map;

		if (obj.statesData !== undefined)
			obj.geoJson = L.geoJson(obj.statesData, {}).addTo(obj.map);

		return this;
	}

	obj.removeLayer = function() {
		if (obj.info !== undefined) {
			//obj.info.removeFrom(obj.map);
			obj.map.removeControl(obj.info);
			obj.info = undefined;
		}

		if (obj.legend !== undefined) {
			//obj.legend.removeFrom(obj.map);
			obj.map.removeControl(obj.legend);
			obj.legend = undefined;
		}

		if (obj.map !== undefined)
			obj.map.removeLayer(obj.geoJson);

	}

	obj.setData = function (statesData, typeMap) {
		obj.statesData = statesData;
		obj.typeMap = typeMap || statesData.features[0].geometry.type.toLowerCase();
	}

    obj.htmlView = function(feature) {
    	return "";
    }

	return obj;
}

function mapPoint(mapa, statesData) {
	var obj; //= map(statesData);	// hereda map

	if (mapa !== undefined) {
		mapa.removeLayer();
		obj = mapa;
	} else
		obj = map(statesData);

	obj.info = undefined;
	obj.legend = undefined;

	obj.fieldValue = undefined;
	obj.colors = ['#800026', '#BD0026', '#E31A1C', '#FC4E2A', '#FD8D3C', '#FEB24C', '#FED976', '#FFEDA0'];
	obj.values = undefined
	obj.valuesReversed = undefined
	obj.typeMap = "point";

	obj.init();

	obj.setValues = function(values) {
		obj.values = values.slice(0);;
		obj.valuesReversed = values.sort(function(a, b){return b-a});	// order descend
	}

	// overwrite setData function
	obj.setData = function (statesData) {
		obj.statesData = statesData || obj.statesData;

		obj.geoJson = L.geoJson(obj.statesData, {
								    style: obj.style,
								    pointToLayer: obj.pointToLayer,
								    onEachFeature: obj.onEachFeature
									}
						).addTo(obj.map);

		if (obj.values !== undefined) {
			obj.legend = L.control({position: 'bottomright'});
			obj.legend.onAdd = obj.legendOnAdd;
			obj.legend.addTo(obj.map);
		}

	}

	obj.legendOnAdd = function () {

		var div = L.DomUtil.create('div', 'info legend'),
			labels = [],
			from, to;

		for (var i = 0; i < obj.values.length; i++) {
			from = obj.values[i];
			to = obj.values[i + 1];

			labels.push(
				'<i style="background:' + obj.getColor(from + 1) + '"></i> ' +
				from + (to ? '&ndash;' + to : '+'));
		}

		div.innerHTML = labels.join('<br>');
		return div;
	};

	// get color depending on population density value
	obj.getColor = function(value) {
		var index = 0

		if (obj.values === undefined)
			return obj.colors[index];

		index = obj.valuesReversed.findIndex(function(a) { return value >= a }) || - 1;

		if (index > -1)
			return obj.colors[index];
		else
			return obj.colors[0];
	}

	obj.style = function(feature) {
		return {color: obj.getColor(feature.properties[obj.fieldValue])};
	}

	obj.pointToLayer = function(feature, latlng) {

		var myIcon = L.icon({
		    iconUrl: 'icons/' + feature.icon,
		    iconSize: [24, 24]
		});

		return L.marker(latlng, {icon: myIcon});

    }

    obj.onEachFeature = function (feature, layer) {
        layer.bindPopup(obj.htmlView(feature.properties));
    }

	return obj;
}
