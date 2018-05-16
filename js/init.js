
var delegaciones = getDelegaciones();
var juzgados = getJuzgados();
var mapa;

var puntos = getDelegaciones();
//var puntos = {};

puntos.features = puntos.features.concat(juzgados.features)
//puntos = getJuzgados();


initHtml = function () {

	// Agrego las delegaciones a filtrar
	$("#div_delegaciones").html(htmlCheckControl(delegaciones.features, "delegacion", "codigo"));

	// seteo el mapa, el combo de lugares y la lista correspondiente
	setHtmlLugar("delegaciones");

}

htmlCheckControl = function(list, name, field, id) {

	var htmlData = "";

	id = id || "id";

	_.forEach(list, function(obj){
		htmlData += "<div class='checkbox' > " +
				    "    <label class=''>" +
				    "      	<input id='chk_" + name + "_" + obj.properties[id] + "' type='checkbox' checked='true' value='" + obj.properties[field] + "' onclick='setDelegacion();'> " + obj.properties[field] + 
				    "    </label>" +
				    "</div>";
	});		

	return htmlData;

}


function setDelegacion() {
	var items = [];
	var allDelegaciones = delegaciones.features;
	var delegacionesSelect = [];
	var juzgadosSelect = [];
	var juzgadosExtSelect = [];
	var drCodigosSelect = [];

	// obtengo el array de ids seleccionados
	for (var i = 0; i < allDelegaciones.length; i++) {
		// no se porque carajo me lo toma como un array de controles...
		if ($('#chk_delegacion_' + allDelegaciones[i].properties.id)[0].checked)
			items.push(allDelegaciones[i].properties.id);
	}

	// en el geoJson filtro las areas seleccionadas
	delegacionesSelect = _.filter(allDelegaciones, function(item){
							  return _.findIndex(items, function(x) {return x === item.properties.id}) !== - 1;
							});

	puntos.features = [];		

	if ($('#chk_delegaciones')[0].checked) {
		puntos.features = delegacionesSelect;		
	}

	if ($('#chk_juzgados')[0].checked) {
		drCodigosSelect = _.map(delegacionesSelect,  function (x) {
									return x.properties.codigo;
								});

		juzgadosSelect = _.filter(juzgados.features, function(item){
					  			return _.intersection(item.properties.abogados, drCodigosSelect).length > 0;
							});

		puntos.features = puntos.features.concat(juzgadosSelect);		
	}

	if ($('#chk_externos')[0].checked) {
		juzgadosExtSelect = _.filter(juzgados.features, function(item){
					  			return _.intersection(item.properties.abogados, ["Asistente PTN","ANSES"]).length > 0;
							});

		puntos.features = puntos.features.concat(juzgadosExtSelect);		
	}

	setMapPuntos(puntos);

}

setHtmlLugar = function (lugar) {

	// invisibilizo los li
	$("#li-delegaciones").hide();

	// invisibilizo los items
	hideLugarItems("delegaciones");

	// seteo los check de los items
	checkLugarItems("delegacion", delegaciones, true);

	// visibilizo el item seleccionado
	$('#li-' + lugar).show();

	setMapPuntos(puntos);

};

hideLugarItems = function(region) {
	// invisibilizo los items
	$("#a_" + region).addClass("collapsed");
	$("#a_" + region).attr("aria-expanded","false");

	$("#div_" + region).removeClass("in");
	$("#div_" + region).attr("height","0px");
	$("#div_" + region).attr("aria-expanded","false");
}

checkLugarItems = function(region, regiones, value) {
	var id;
	var control;

	for (var i = 0; i < regiones.features.length; i++) {
		id = "#chk_" + region + "_" + regiones.features[i].properties.id;

		// no se porque carajo me lo toma como un array de controles...
		//$(barrioId)[0].disabled = (todosCheck || ningunoCheck);
		$(id)[0].checked = value;
	}
}

setMapPuntos = function(points) {
	statesData = points;

	if (mapa !== undefined) 
    	mapa.removeLayer();

	mapa = mapPoint(mapa);

    mapa.htmlView = function(props) {
    	var abogados ="";

    	if (props) {

    		if (props.abogados)
    			abogados = "Abogados: <span style='font-weight: bold;'>" + props.abogados.join(", ") + "</span><br/>";

	    	return "<span style='font-weight: bold;font-size:110%;'>" + props.descripcion + "</span><br/>" +
	    			abogados +  
					"Provincia: " + props.provincia + "<br/>" +
					"Domicilio: " + props.domicilio
    	}
    }
    
    mapa.setData(statesData);
}

function selectDelegacion(option) {
	var allDelegaciones = getDelegaciones().features;

	for (var i = 0; i < allDelegaciones.length; i++) {
		$('#chk_delegacion_' + allDelegaciones[i].properties.id)[0].checked = option;
	}

	// seteo las areas en el mapa
	setDelegacion();

}

