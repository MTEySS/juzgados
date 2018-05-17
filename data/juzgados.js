
function getJuzgados() {

	var icon = "juzgado_violet.png"
	var icon_deleg = "juzgado_blue.png"
	var icon_no_deleg = "juzgado_yellow.png"
	var icon_no_abog = "juzgado_red.png"
	var icon_abog_ext = "juzgado_violet.png"

	var data = {
		"type": "FeatureCollection",
		"features": [
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -64.179246,-31.434416 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE CORDOBA",
					"domicilio":"Concepcion Arenal 690",
					"localidad":"Cordoba",
					"provincia":"Cordoba",
					"dr_codigo":"DR Cordoba",
					"abogados":["DR Cordoba"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_abog_ext,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -62.688869,-32.629582 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE BELL VILLE",
					"domicilio":"Córdoba 246",
					"localidad":"Bell Ville",
					"provincia":"Cordoba",
					"dr_codigo":"",
					"abogados":["Asistente PTN"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -66.855381,-29.412289 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE LA RIOJA",
					"domicilio":"Joaquin V. Gonzalez 85",
					"localidad":"La Rioja",
					"provincia":"La Rioja",
					"dr_codigo":"DR La Rioja",
					"abogados":["DR La Rioja"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_no_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -62.076985,-31.425668 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE SAN FRANCISCO",
					"domicilio":"Pasaje Ciudad de Neuquén 2346",
					"localidad":"San Francisco",
					"provincia":"Cordoba",
					"dr_codigo":"",
					"abogados":["DR Santa Fe"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_abog_ext,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -64.349374,-33.125965 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE RIO CUARTO",
					"domicilio":"Sobremonte 972",
					"localidad":"Rio Cuarto",
					"provincia":"Cordoba",
					"dr_codigo":"",
					"abogados":["Asistente PTN"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_abog_ext,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -63.241971,-32.410827 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE VILLA MARIA",
					"domicilio":"9 de Julio 43",
					"localidad":"Villa Maria",
					"provincia":"Cordoba",
					"dr_codigo":"",
					"abogados":["Asistente PTN"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -58.533649,-34.578580 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE SAN MARTIN",
					"domicilio":"Bonifacini 1770",
					"localidad":"San Martin",
					"provincia":"Buenos Aires",
					"dr_codigo":"DR San Martin",
					"abogados": ["DR San Martin", "DR La Matanza"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_no_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -58.951722,-34.162681 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE CAMPANA",
					"domicilio":"25 de Mayo 483",
					"localidad":"Campana",
					"provincia":"Buenos Aires",
					"dr_codigo":"DR Zarate",
					"abogados":["DR Zarate"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_no_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -59.428357,-34.650434 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE MERCEDES",
					"domicilio":"Calle 21 621",
					"localidad":"Mercedes",
					"provincia":"Buenos Aires",
					"dr_codigo":"",
					"abogados":["DR La Matanza"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -57.554843,-37.999095 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE MAR DEL PLATA",
					"domicilio":"Independencia 2024",
					"localidad":"Mar del Plata",
					"provincia":"Buenos Aires",
					"dr_codigo":"DR Mar del Plata",
					"abogados":["DR Mar del Plata"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -58.739260,-38.556245 ]
				},
					"properties": {
					"descripcion":"JUZGADO FEDERAL DE NECOCHEA",
					"domicilio":"Calle 56 3003",
					"localidad":"Necochea",
					"provincia":"Buenos Aires",
					"dr_codigo":"DR Necochea",
					"abogados":["DR Necochea"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_abog_ext,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -57.678036,-36.314476 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE DOLORES",
					"domicilio":"Buenos Aires 127",
					"localidad":"Dolores",
					"provincia":"Buenos Aires",
					"dr_codigo":"",
					"abogados":["Asistente PTN"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_no_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -59.859735,-36.776090 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE AZUL",
					"domicilio":"Rubén César De Paula 452",
					"localidad":"Azul",
					"provincia":"Buenos Aires",
					"dr_codigo":"",
					"abogados":["DR Tandil"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -58.838174,-27.464000 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE CORRIENTES",
					"domicilio":"25 de Mayo 970",
					"localidad":"Corrientes",
					"provincia":"Corrientes",
					"dr_codigo":"DR Corrientes",
					"abogados":["DR Corrientes"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_abog_ext,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -57.086408,-29.714402 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE PASO DE LOS LIBRES",
					"domicilio":"LOS 108 837",
					"localidad":"Paso de los Libres",
					"provincia":"Corrientes",
					"dr_codigo":"",
					"abogados":["Asistente PTN"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -57.946252,-34.916191 ]
				},
				"properties": {
				"descripcion":"JUZGADO FEDERAL DE LA PLATA",
					"domicilio":"Calle 54 568",
					"localidad":"La Plata",
					"provincia":"Buenos Aires",
					"dr_codigo":"DR La Plata",
					"abogados":["DR La Plata"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -60.944481,-34.587935 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE JUNIN",
					"domicilio":"Cabrera 222",
					"localidad":"Junín",
					"provincia":"Buenos Aires",
					"dr_codigo":"DR Junin",
					"abogados":["DR Junin"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_no_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -58.292187,-34.743948 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE QUILMES",
					"domicilio":"12 de Octubre 3300",
					"localidad":"Quilmes",
					"provincia":"Buenos Aires",
					"dr_codigo":"",
					"abogados":["DR Lomas de Zamora"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -58.399609,-34.758648 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE LOMAS DE ZAMORA",
					"domicilio":"Leandro N. Alem 168",
					"localidad":"Lomas de Zamora",
					"provincia":"Buenos Aires",
					"dr_codigo":"DR Lomas de Zamora",
					"abogados":["DR Lomas de Zamora"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -60.527112,-31.734733 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE PARANA",
					"domicilio":"25 de Mayo 256",
					"localidad":"Paraná",
					"provincia":"Entre Ríos",
					"dr_codigo":"DR Parana",
					"abogados":["DR Parana"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_no_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -58.230745,-32.483619 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE CONCEPCION DEL URUGUAY",
					"domicilio":"Galarza 614",
					"localidad":"Concepción del Uruguay",
					"provincia":"Entre Ríos",
					"dr_codigo":"",
					"abogados":["DR Concordia"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -58.994030,-27.447116 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE RESISTENCIA",
					"domicilio":"Cangallo 165",
					"localidad":"Resistencia",
					"provincia":"Chaco",
					"dr_codigo":"DR Resistencia",
					"abogados":["DR Resistencia"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_no_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -59.646897,-29.149251 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE RECONQUISTA",
					"domicilio":"Gral. Belgrano 1170",
					"localidad":"Reconquista",
					"provincia":"Santa Fe",
					"dr_codigo":"",
					"abogados":["DR Santa Fe"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_no_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -60.438845,-26.787659 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE SAENZ PEÑA",
					"domicilio":"Mitre 369",
					"localidad":"Sáenz Peña",
					"provincia":"Chaco",
					"dr_codigo":"",
					"abogados":["DR Resistencia"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_no_abog,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -58.170605,-26.184614 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE FORMOSA",
					"domicilio":"Mitre 839",
					"localidad":"Formosa",
					"provincia":"Formosa",
					"dr_codigo":"",
					"abogados":["DR Salta"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -68.840465,-32.900964 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE MENDOZA",
					"domicilio":"San Juan 247",
					"localidad":"Mendoza",
					"provincia":"Mendoza",
					"dr_codigo":"DR Mendoza",
					"abogados":["DR Mendoza"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -68.329050,-34.617538 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE SAN RAFAEL",
					"domicilio":"San Lorenzo y Barcala",
					"localidad":"San Rafael",
					"provincia":"Mendoza",
					"dr_codigo":"DR San Rafael",
					"abogados":["DR San Rafael"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -66.337215,-33.304372 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE SAN LUIS",
					"domicilio":"Belgrano 1020",
					"localidad":"San Luis",
					"provincia":"San Luis",
					"dr_codigo":"DR San Luis",
					"abogados":["DR San Luis"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -68.520969,-31.537552 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE SAN JUAN",
					"domicilio":"Bartolome Mitre 330",
					"localidad":"San Juan",
					"provincia":"San Juan",
					"dr_codigo":"DR San Juan",
					"abogados":["DR San Juan"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -65.204414,-26.835449 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE TUCUMAN",
					"domicilio":"Las Piedras 418",
					"localidad":"San Miguel de Tucumán",
					"provincia":"Tucumán",
					"dr_codigo":"DR Tucuman",
					"abogados":["DR Tucuman"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -65.782315,-28.468631 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE CATAMARCA",
					"domicilio":"República 323",
					"localidad":"San Fernando del Valle de Catamarca",
					"provincia":"Catamarca",
					"dr_codigo":"DR Catamarca",
					"abogados":["DR Catamarca"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -64.268450,-27.794403 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE SANTIAGO DEL ESTERO",
					"domicilio":"Sarmiento 695",
					"localidad":"Santiago del Estero",
					"provincia":"Santiago del Estero",
					"dr_codigo":"DR Sgo. del Estero",
					"abogados":["DR Sgo. del Estero"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -67.576925,-39.026210 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE GENERAL ROCA",
					"domicilio":"España 1690",
					"localidad":"Gral. Roca",
					"provincia":"Río Negro",
					"dr_codigo":"DR Gral. Roca",
					"abogados":["DR Gral. Roca"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -68.056213,-38.951648 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE NEUQUEN",
					"domicilio":"Santa Fe 318",
					"localidad":"Neuquén",
					"provincia":"Neuquén",
					"dr_codigo":"DR Neuquen",
					"abogados":["DR Neuquen"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_no_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -70.068009,-38.902841 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE ZAPALA",
					"domicilio":"Zeballos 104",
					"localidad":"Zapala",
					"provincia":"Neuquén",
					"dr_codigo":"",
					"abogados":["DR Gral. Roca"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_no_abog,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -71.314618,-41.133815 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE BARILOCHE",
					"domicilio":"San Martín 425",
					"localidad":"San Carlos de Bariloche",
					"provincia":"Río Negro",
					"dr_codigo":"DR Bariloche",
					"abogados":["DR Gral. Roca"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -62.993520,-40.808780 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE VIEDMA",
					"domicilio":"San Martín 189",
					"localidad":"Viedma",
					"provincia":"Río Negro",
					"dr_codigo":"DR Viedma",
					"abogados":["DR Viedma"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -55.900567,-27.374292 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE POSADAS",
					"domicilio":"Av. Bartolomé Mitre 2353",
					"localidad":"Posadas",
					"provincia":"Misiónes",
					"dr_codigo":"DR Posadas",
					"abogados":["DR Posadas"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_no_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -55.123316,-27.483624 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE OBERA",
					"domicilio":"Larrea 974",
					"localidad":"Oberá",
					"provincia":"Misiónes",
					"dr_codigo":"",
					"abogados":["DR Posadas"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_no_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -54.606312,-26.410289 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE ELDORADO",
					"domicilio":"América 234",
					"localidad":"Eldorado",
					"provincia":"Misiónes",
					"dr_codigo":"",
					"abogados":["DR Posadas"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -67.522311,-46.439980 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE CALETA OLIVIA",
					"domicilio":"Rivadavia 22",
					"localidad":"Caleta Olivia",
					"provincia":"Santa Cruz",
					"dr_codigo":"DR Caleta Olivia",
					"abogados":["DR Caleta Olivia"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_no_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -67.480714,-45.864793 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE COMODORO RIVADAVIA",
					"domicilio":"Calle 2 de Abril S/N",
					"localidad":"Comodoro Rivadavia",
					"provincia":"Chubut",
					"dr_codigo":"DR Cro. Rivadavia",
					"abogados": ["DR Gral. Roca", "DR Caleta Olivia"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_no_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -65.103461,-43.297253 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE RAWSON",
					"domicilio":"9 de Julio y Rivadavia",
					"localidad":"Rawson",
					"provincia":"Chubut",
					"dr_codigo":"",
					"abogados":["DR Trelew"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_no_abog,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -69.216690,-51.622511 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE RIO GALLEGOS",
					"domicilio":"San Martín 709",
					"localidad":"Río Gallegos",
					"provincia":"Santa Cruz",
					"dr_codigo":"DR Rio Gallegos",
					"abogados":["DR Gral. Roca"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -67.694869,-53.789883 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE RIO GRANDE",
					"domicilio":"Libertad 731",
					"localidad":"Río Grande",
					"provincia":"Tierra del Fuego",
					"dr_codigo":"DR Rio Grande",
					"abogados":["DR Rio Grande"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_abog_ext,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -71.319576,-42.914931 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE ESQUEL",
					"domicilio":"25 de Mayo 505",
					"localidad":"Esquel",
					"provincia":"Chubut",
					"dr_codigo":"",
					"abogados":["ANSES"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_no_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -68.322663,-54.810978 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE USHUAIA",
					"domicilio":"Goleta Florencia 1686",
					"localidad":"Ushuaia",
					"provincia":"Tierra del Fuego",
					"dr_codigo":"",
					"abogados":["DR Rio Grande"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -65.310304,-24.185835 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE JUJUY",
					"domicilio":"Belgrano 1252",
					"localidad":"San Salvador de Jujuy",
					"provincia":"Jujuy",
					"dr_codigo":"DR Jujuy",
					"abogados":["DR Jujuy"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -65.408017,-24.788678 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE SALTA",
					"domicilio":"España 394",
					"localidad":"Salta",
					"provincia":"Salta",
					"dr_codigo":"DR Salta",
					"abogados":["DR Salta"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_no_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -64.326154,-23.134491 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE ORAN",
					"domicilio":"Lopez y Planes esq. Lamadrid",
					"localidad":"Oran",
					"provincia":"Salta",
					"dr_codigo":"",
					"abogados":["DR Salta"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_no_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -63.801038,-22.535369 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE TARTAGAL",
					"domicilio":"Mosconi 1461",
					"localidad":"Tartagal",
					"provincia":"Salta",
					"dr_codigo":"",
					"abogados":["DR Salta"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -62.261268,-38.715775 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE BAHÍA BLANCA",
					"domicilio":"Alsina 317",
					"localidad":"Bahía Blanca",
					"provincia":"Buenos Aires",
					"dr_codigo":"DR Bahia Blanca",
					"abogados":["DR Bahia Blanca"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -64.293163,-36.620852 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE SANTA ROSA",
					"domicilio":"Julio Argentino Roca 153",
					"localidad":"Santa Rosa",
					"provincia":"La Pampa",
					"dr_codigo":"DR Santa Rosa",
					"abogados":["DR Santa Rosa"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -60.639812,-32.941779 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE ROSARIO",
					"domicilio":"Entre Ríos 435",
					"localidad":"Rosario",
					"provincia":"Santa Fe",
					"dr_codigo":"DR Rosario",
					"abogados":["DR Rosario"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -60.215447,-33.333016 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE SAN NICOLAS",
					"domicilio":"Garibaldi 208",
					"localidad":"San Nicolás de Los Arroyos",
					"provincia":"Buenos Aires",
					"dr_codigo":"DR San Nicolas",
					"abogados":["DR San Nicolas"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -60.712039,-31.655581 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE SANTA FE",
					"domicilio":"9 de Julio 1693",
					"localidad":"Santa Fe",
					"provincia":"Santa Fe",
					"dr_codigo":"DR Santa Fe",
					"abogados":["DR Santa Fe"]
				}
			},
			{
				"type": "Feature",
	            "class": "juzgado",
	            "icon": icon_deleg,
				"geometry": {
				   "type": "Point",
				   "coordinates":  [ -61.492603,-31.251293 ]
				},
				"properties": {
					"descripcion":"JUZGADO FEDERAL DE RAFAELA",
					"domicilio":"25 de Mayo 121",
					"localidad":"Rafaela",
					"provincia":"Santa Fe",
					"dr_codigo":"",
					"abogados":["DR Santa Fe"]
				}
			}
		]
	}
		
	return data;
}
		