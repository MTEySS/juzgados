
function getDelegaciones() {

	var icon = "dr_green.png"
	var icon_abog = "dr_green.png"
	var icon_no_abog = "dr_orange.png"

	var data = {
	    "type": "FeatureCollection",
	    "features": [
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-65.3023135, -24.188175]
	            },
	            "properties": {
	                "id": 1,
					"codigo": "DR Jujuy",
					"descripcion": "Delegacion Regional Jujuy",
					"provincia:": "JUJUY",
					"region": "NOA",
					"cargo": "Delegado Regional",
					"responsable": "Sr. Carlos Guarini",
					"domicilio": "Otero 82",
					"codigopostal": "4600",
					"telefono": "(0388) 4237808 Fax: (0388) 4237903",
					"mail": "drjujuy@trabajo.gob.ar"
	    		},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-65.4106325, -24.7865762]
	            },
	            "properties": {
	                "id": 2,
					"codigo": "DR Salta",
					"descripcion": "Delegacion Regional Salta",
					"provincia": "SALTA",
					"region": "NOA",
					"cargo": "Delegado Regional",
					"responsable": "Dr. Javier Cáceres Moreno",
					"domicilio": "General Güemes 431/5",
					"codigopostal": "4400",
					"telefono": "(0387) 4313-428/771 / 4314-327",
					"mail": "drsalta@trabajo.gob.ar"
	    		},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-65.2146055,-26.8282593]
	            },
	            "properties": {
	                "id": 3,
					"codigo": "DR Tucuman",
					"descripcion": "Delegacion Regional Tucuman", 
					"provincia": "TUCUMAN",
					"region": "NOA",
					"cargo": "Delegado Regional",
					"responsable": "Lic. María José Rubiol",
					"domicilio": "San Martín 1012",
					"codigopostal": "4000",
					"telefono": "(0381) 4221835 / 4229603 Fax: (0381) 4229603",
					"mail": "drtucuman@trabajo.gob.ar"
	    		},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-64.2611877, -27.7874788]
	            },
	            "properties": {
	                "id": 4,
					"codigo": "DR Sgo. del Estero",
					"descripcion": "Delegacion Regional Sgo del Estero",
					"provincia": "SANTIAGO DEL ESTERO",
					"region": "NOA",
					"cargo": "Delegado Regional",
					"responsable": "Alejandro Ducca Kozameh",
					"domicilio": "Independencia 56, piso 4",
					"codigopostal": "4200",
					"telefono": "(0385) 4211252 / 4222736",
					"mail": "drsantiagodelestero@trabajo.gob.ar"
	    		},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-65.7790858,-28.466848]
	            },
	            "properties": {
	                "id": 5,
					"codigo": "DR Catamarca",
					"descripcion": "Delegacion Regional Catamarca",
					"provincia": "CATAMARCA",
					"region": "NOA",
					"cargo": "Delegado Regional",
					"responsable": "Dr. Sebastián Eduardo Fernández",
					"domicilio": "Salta 499",
					"codigopostal": "4700",
					"telefono": "(0383) 4458946 / 4458952",
					"mail": "drcatamarca@trabajo.gob.ar"
	    		},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-58.9855904,-27.4571449]
	            },
	            "properties": {
	                "id": 6,
					"codigo": "DR Resistencia",
					"descripcion": "Delegacion Regional Resistencia",
					"provincia": "CHACO",
					"region": "NEA",
					"cargo": "Delegado Regional",
					"responsable": "Dra. Mariela Beatriz Kapetinich",
					"domicilio": "Arturo Illia 564, planta alta",
					"codigopostal": "3500",
					"telefono": "(0362) 442-6499 Fax: (0362) 4425160",
					"mail": "drchaco@trabajo.gob.ar"
	    		},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-58.8324807,-27.4677631]
	            },
	            "properties": {
	                "id": 7,
					"codigo": "DR Corrientes",
					"descripcion": "Delegacion Regional Corrientes", 
					"provincia": "CORRIENTES",
					"region": "NEA",
					"cargo": "Delegado Regional",
					"responsable": "Justo José Zapponi",
					"domicilio": "Santa Fe 867",
					"codigopostal": "3400",
					"telefono": "(0379) 4422032 Fax: (0379) 4422009",
					"mail": "drcorrientes@trabajo.gob.ar"
	    		},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-55.892839,-27.3686044]
	            },
	            "properties": {
	                "id": 8,
					"codigo": "DR Posadas",
					"descripcion": "Delegacion Regional Posadas", 
					"provincia": "MISIONES",
					"region": "NEA",
					"cargo": "Delegado Regional",
					"responsable": "Dra. Alicia Cabral",
					"domicilio": "3 de Febrero 1940, piso 1",
					"codigopostal": "3300",
					"telefono": "(0376) 4425093 / 4434195/4437675",
					"mail": "drmisiones@trabajo.gob.ar"
	    		},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_no_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-58.1772541,-26.1831689]
	            },
	            "properties": {
	                "id": 9,
					"codigo": "DR Formosa",
					"descripcion": "Delegacion Regional Formosa", 
					"provincia": "FORMOSA",
					"region": "NEA",
					"cargo": "Delegado Regional",
					"responsable": "Silvia Carolina Blazek",
					"domicilio": "Av. 9 de Julio 608",
					"codigopostal": "3600",
					"telefono": "(03704) 4424585 / 4430359",
					"mail": "drformosa@trabajo.gob.ar"
	    		},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-60.7086956,-31.6463589]
	            },
	            "properties": {
	                "id": 10,
					"codigo": "DR Santa Fe",
					"descripcion": "Delegacion Regional Santa Fe", 
					"provincia": "SANTA FE",
					"region": "CENTRO",
					"cargo": "Delegado Regional",
					"responsable": "Oscar A. Bianchini",
					"domicilio": "San Martín 2533, piso 1",
					"codigopostal": "3000",
					"telefono": "(0342) 4528046 Fax: (0342) 4537929",
					"mail": "drsantafe@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-60.6408497,-32.9475235]
	            },
	            "properties": {
	                "id": 11,
					"codigo": "DR Rosario",
					"descripcion": "Delegacion Regional Rosario", 
					"provincia": "SANTA FE",
					"region": "CENTRO",
					"cargo": "Delegado Regional",
					"responsable": "Adolfo Martín José Papini Cantón",
					"domicilio": "Rioja 1120, piso 4",
					"codigopostal": "2000",
					"telefono": "(0341) 4402172 Fax: (0341) 4402176/49",
					"mail": "drrosario@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-64.1914305,-31.4157377]
	            },
	            "properties": {
	                "id": 12,
					"codigo": "DR Cordoba",
					"descripcion": "Delegacion Regional Cordoba", 
					"provincia": "CORDOBA",
					"region": "CENTRO",
					"cargo": "Delegado Regional",
					"responsable": "Lic. Agustín Heredia",
					"domicilio": "27 de Abril 351",
					"codigopostal": "5000",
					"telefono": "(0351) 4237566  Fax: (0351) 4220049",
					"mail": "drcordoba@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-60.5372803,-31.731602]
	            },
	            "properties": {
	                "id": 13,
					"codigo": "DR Parana",
					"descripcion": "Delegacion Regional Parana", 
					"provincia": "ENTRE RÍOS",
					"region": "CENTRO",
					"cargo": "Delegado Regional",
					"responsable": "Diego Sebastián Carnaval",
					"domicilio": "España 321, piso 1",
					"codigopostal": "3100",
					"telefono": "(0343) 4422704/4221703 Fax: (0343) 4218794",
					"mail": "drparana@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-58.0184581,-31.4001434]
	            },
	            "properties": {
	                "id": 14,
					"codigo": "DR Concordia",
					"descripcion": "Delegacion Regional Concordia", 
					"provincia": "ENTRE RÍOS",
					"region": "CENTRO",
					"cargo": "Delegado Regional",
					"responsable": "Dr. Guillermo Satalía Méndez",
					"domicilio": "Hipólito Yrigoyen 487, piso 2",
					"codigopostal": "3200",
					"telefono": "(0345) 4217047/3071",
					"mail": "drconcordia@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-68.8450924,-32.8806263]
	            },
	            "properties": {
	                "id": 15,
					"codigo": "DR Mendoza",
					"descripcion": "Delegacion Regional Mendoza", 
					"provincia": "MENDOZA",
					"region": "CUYO",
					"cargo": "Delegado Regional",
					"responsable": "Ricardo Diego Pettignano",
					"domicilio": "Eusebio Blanco 450, piso 2",
					"codigopostal": "5500",
					"telefono": "(0261) 4258249 (Int. 611-612) / 4291450/1946/1835/7273",
					"mail": "drmendoza@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-66.3362022,-33.30407]
	            },
	            "properties": {
	                "id": 16,
					"codigo": "DR San Luis",
					"descripcion": "Delegacion Regional San Luis",
					"provincia": "SAN LUIS",
					"region": "CUYO",
					"cargo": "Delegado Regional",
					"responsable": "Patricia Beatriz Picca",
					"domicilio": "Colón 580",
					"codigopostal": "5700",
					"telefono": "(0266) 4421236 / 4437636 Fax: (0266) 442136 (Int 41)",
					"mail": "drsanluis@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_no_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-63.2588219,-32.4120816]
	            },
	            "properties": {
	                "id": 17,
					"codigo": "DR Villa Maria",
					"descripcion": "Delegacion Regional Villa Maria", 
					"provincia": "CORDOBA",
					"region": "CUYO",
					"cargo": "-",
					"responsable": "Lic. Agustín Heredia",
					"domicilio": "Salta 229",
					"codigopostal": "5900",
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-68.5215845,-31.538589]
	            },
	            "properties": {
	                "id": 18,
					"codigo": "DR San Juan",
					"descripcion": "Delegacion Regional San Juan", 
					"provincia": "SAN JUAN",
					"region": "CUYO",
					"cargo": "Delegado Regional",
					"responsable": "Hugo Ariel Trigo",
					"domicilio": "Santa Fe 454",
					"codigopostal": "5400",
					"telefono": "(0264) 4223853 / 4222189 / 4221197",
					"mail": "drsanjuan@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-66.858776,-29.4125717]
	            },
	            "properties": {
	                "id": 19,
					"codigo": "DR La Rioja",
					"descripcion": "Delegacion Regional La Rioja", 
					"provincia": "LA RIOJA",
					"region": "CUYO",
					"cargo": "Delegado Regional",
					"responsable": "Ing. Edgardo Céliz Mercado",
					"domicilio": "25 de Mayo 74, piso 1",
					"codigopostal": "5300",
					"telefono": "(0380) 460322 / 4423214 Fax: (0380) 460323",
					"mail": "drlarioja@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-68.3285909,-34.617379]
	            },
	            "properties": {
	                "id": 20,
					"codigo": "DR Sa Rafael",
					"descripcion": "Delegacion Regional San Rafael", 
					"provincia": "MENDOZA",
					"region": "CUYO",
					"cargo": "Delegado Regional",
					"responsable": "Sra. María de los Ángeles Barbisan",
					"domicilio": "Av. Mitre 277",
					"codigopostal": "5600",
					"telefono": "(0260) 4429211 / 4437106/ 4437130 / 4422572",
					"mail": "drsanrafael@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-67.5778531,-39.0276123]
	            },
	            "properties": {
	                "id": 21,
					"codigo": "DR Gral. Roca",
					"descripcion": "Delegacion Regional General Roca", 
					"provincia": "RIO NEGRO",
					"region": "AUSTRAL",
					"cargo": "Delegado Regional",
					"responsable": "Juan Oscar González",
					"domicilio": "Av. Roca y Tucumán",
					"codigopostal": "8332",
					"telefono": "(0298) 4423511",
					"mail": "drrionegro@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_no_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-69.2211412,-51.6240375]
	            },
	            "properties": {
	                "id": 22,
					"codigo": "DR Rio Gallegos",
					"descripcion": "Delegacion Regional Rio Gallegos", 
					"provincia": "SANTA CRUZ",
					"region": "AUSTRAL",
					"cargo": "Delegado Regional",
					"responsable": "Daniel Murdoch",
					"domicilio": "Justo José de Urquiza 45",
					"codigopostal": "9400",
					"telefono": "(02966) 422210 / 420082",
					"mail": "drriogallegos@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-67.514805,-46.4444032]
	            },
	            "properties": {
	                "id": 23,
					"codigo": "DR Caleta Olivia",
					"descripcion": "Delegacion Regional Caleta Olivia", 
					"provincia": "SANTA CRUZ",
					"region": "AUSTRAL",
					"cargo": "Delegado Regional",
					"responsable": "Dra. Andrea Valeria Fernández",
					"domicilio": "Eva Perón 400",
					"codigopostal": "9011",
					"telefono": "(0297) 4851251",
					"mail": "drcaletaoliva@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_no_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-67.4877924,-45.8680508]
	            },
	            "properties": {
	                "id": 24,
					"codigo": "DR Cro. Rivadavia",
					"descripcion": "Delegacion Regional Comodoro Rivadavia", 
					"provincia": "CHUBUT",
					"region": "AUSTRAL",
					"cargo": "Delegado Regional",
					"responsable": "Ricardo Cerezo",
					"domicilio": "Sáenz Peña 796, piso 2",
					"codigopostal": "9000",
					"telefono": "(0297) 4472338 Fax: (0297) 4471198",
					"mail": "drcomodoro@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-67.6971814,-53.7935703]
	            },
	            "properties": {
	                "id": 25,
					"codigo": "DR Rio Grande",
					"descripcion": "Delegacion Regional Rio Grande", 
					"provincia": "TIERRA DEL FUEGO",
					"region": "AUSTRAL",
					"cargo": "Delegado Regional",
					"responsable": " Dr. Luis Gómez",
					"domicilio": "9 de Julio 768 , piso 1",
					"codigopostal": "9420",
					"telefono": "(0296) 4430044 / 4422079  /  15467271",
					"mail": "drtierradelfuego@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-68.0623097,-38.9487657]
	            },
	            "properties": {
	                "id": 26,
					"codigo": "DR Neuquen",
					"descripcion": "Delegacion Regional Neuquen", 
					"provincia": "NEUQUEN",
					"region": "AUSTRAL",
					"cargo": "Delegado Regional",
					"responsable": "A/C Dr. Jorge Héctor Stopiello",
					"domicilio": "Sargento Cabral 60",
					"codigopostal": "8300",
					"telefono": "(0299) 4470902 / 4435985 Fax: (0299) 4436494",
					"mail": "drneuquen@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-62.9996164,-40.8088415]
	            },
	            "properties": {
	                "id": 27,
					"codigo": "DR Viedma",
					"descripcion": "Delegacion Regional Viedma",
					"provincia": "RÍO NEGRO",
					"region": "AUSTRAL",
					"cargo": "Delegado Regional",
					"responsable": "Juan Manuel Vega",
					"domicilio": "25 de Mayo 724/26, planta baja y alta",
					"codigopostal": "8500",
					"telefono": "(02920) 422188/229",
					"mail": "drviedma@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-65.3069563,-43.2522047]
	            },
	            "properties": {
	                "id": 28,
					"codigo": "DR Trelew",
					"descripcion": "Delegacion Regional Trelew",
					"provincia": "CHUBUT",
					"region": "AUSTRAL",
					"cargo": "-",
					"responsable": "Alejandro Torres",
					"domicilio": "Italia 60",
					"codigopostal": "9100",
					"telefono": "(0280) 4426425/5762",
					"mail": "drtrelew@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_no_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-71.3031743,-41.1344456]
	            },
	            "properties": {
	                "id": 29,
					"codigo": "DR Bariloche",
					"descripcion": "Delegacion Regional Bariloche",
					"provincia": "RÍO NEGRO",
					"region": "AUSTRAL",
					"cargo": "Delegado Regional",
					"responsable": "Silvana Camelli",
					"domicilio": "Mitre 630, PB, S, C",
					"codigopostal": "8400",
					"telefono": "(0294) 4432399/154/082",
					"mail": "drbariloche@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-58.5648129,-34.6781862]
	            },
	            "properties": {
	                "id": 30,
					"codigo": "DR La Matanza",
					"descripcion": "Delegacion Regional La Matanza", 
					"provincia": "BUENOS AIRES",
					"region": "CONURBANO",
					"cargo": "Delegado Regional",
					"responsable": "Analía Alejandra Apollonio",
					"domicilio": "Monseñor José Francisco Marcon 3002, esquina Tomás Justo Villegas",
					"codigopostal": "1754",
					"telefono": "(011) 4484-0661/1166/1311 Fax: (011) 4484-0661 / 1166 / 1311",
					"mail": "drmoron@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-58.5500354,-34.5837359]
	            },
	            "properties": {
	                "id": 31,
					"codigo": "DR San Martin",
					"descripcion": "Delegacion Regional San Martin", 
					"provincia": "BUENOS AIRES",
					"region": "CONURBANO",
					"cargo": "Delegado Regional",
					"responsable": "Diego Alexis Passo",
					"domicilio": "Agustín R. Vidal (ex Ramón Falcón) 3740",
					"codigopostal": "1650",
					"telefono": "(011) 4755-1621/6636 / 4753-9924 / 4724-0851",
					"mail": "drsanmartin@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-58.3993121,-34.7780085]
	            },
	            "properties": {
	                "id": 32,
					"codigo": "DR Lomas de Zamora",
					"descripcion": "Delegacion Regional Temperley - Lomas de Zamora", 
					"provincia": "BUENOS AIRES",
					"region": "CONURBANO",
					"cargo": "Delegado Regional",
					"responsable": "Dr. Hector Fernández",
					"domicilio": "Av. Meeks 1393",
					"codigopostal": "1834",
					"telefono": "(011) 4244-2461 Fax: (011) 4244-9214/0640",
					"mail": "drlomasdezamora@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-57.9486087,-34.9131091]
	            },
	            "properties": {
	                "id": 33,
					"codigo": "DR La Plata",
					"descripcion": "Delegacion Regional La Plata", 
					"provincia": "BUENOS AIRES",
					"region": "CONURBANO",
					"cargo": "Delegado Regional",
					"responsable": "Martha Durán de Savarino",
					"domicilio": "Calle 51 Nº 476 y ½ (ex 484), PB of. 2, e/calles 4 y 5",
					"codigopostal": "1900",
					"telefono": "(0221) 4821861 / 4836519 (Int. 25)",
					"mail": "drlaplata@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-59.1394803,-37.3228642]
	            },
	            "properties": {
	                "id": 34,
					"codigo": "DR Tandil",
					"descripcion": "Delegacion Regional Tandil",
					"provincia": "BUENOS AIRES",
					"region": "PAMPEANA",
					"cargo": "Director Regional",
					"responsable": "Dr. Jorge Ariel Schuster",
					"domicilio": "9 de Julio 860",
					"codigopostal": "7000",
					"telefono": "(0249) 442-3955/3329",
					"mail": "drtandil@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-60.2242764,-33.3358171]
	            },
	            "properties": {
	                "id": 35,
					"codigo": "DR San Nicolas",
					"descripcion": "Delegacion Regional San Nicolas",
					"provincia": "BUENOS AIRES",
					"region": "PAMPEANA",
					"cargo": "Delegado Regional",
					"responsable": "Alberto Julián Teisseire",
					"domicilio": "De la Nación 433",
					"codigopostal": "2900",
					"telefono": "(0336) 4423171/3161",
					"mail": "drsannicolas@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-57.547778,-37.9995597]
	            },
	            "properties": {
	                "id": 36,
					"codigo": "DR Mar del Plata",
					"descripcion": "Delegacion Regional Mar del Plata",
					"provincia": "BUENOS AIRES",
					"region": "PAMPEANA",
					"cargo": "Delegado Regional",
					"responsable": "Angel Ratto",
					"domicilio": "Santiago del Estero 1656",
					"codigopostal": "7600",
					"telefono": "(0223) 4918398 / 4920140 (Int. 1) / 4953505",
					"mail": "drmardel@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-62.2670027,-38.7187608]
	            },
	            "properties": {
	                "id": 37,
					"codigo": "DR Bahia Blanca",
					"descripcion": "Delegacion Regional Bahia Blanca",
					"provincia": "BUENOS AIRES",
					"region": "PAMPEANA",
					"cargo": "Delegado Regional",
					"responsable": "Gerardo Benjamín Rotstein",
					"domicilio": "Alsina 19, piso 3",
					"codigopostal": "8000",
					"telefono": "(0291) 4521219 / 4550350 / 4512005",
					"mail": "drbahiablanca@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-60.9461025,-34.5971002]
	            },
	            "properties": {
	                "id": 38,
					"codigo": "DR Junin",
					"descripcion": "Delegacion Regional Junin",
					"provincia": "BUENOS AIRES",
					"region": "PAMPEANA",
					"cargo": "Delegado Regional",
					"responsable": "Constanza Favorito",
					"domicilio": "Bartolome Mitre 225",
					"codigopostal": "6000",
					"telefono": "(0236) 4423167",
					"mail": "drjunin@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-64.2854933,-36.6210788]
	            },
	            "properties": {
	                "id": 39,
					"codigo": "DR Santa Rosa",
					"descripcion": "Delegacion Regional Santa Rosa",
					"provincia": "LA PAMPA",
					"region": "PAMPEANA",
					"cargo": "Delegado Regional",
					"responsable": "Edgardo Senen Gonzalez",
					"domicilio": "Av. San Martín Oeste 602",
					"codigopostal": "6300",
					"telefono": "(02954) 433048 / 434519",	
					"mail": "drlapampa@trabajo.gob.ar"
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-58.7410683,-38.5559343]
	            },
	            "properties": {
	                "id": 40,
					"codigo": "DR Necochea",
					"descripcion": "Delegacion Regional Necochea",
					"provincia": "BUENOS AIRES",
					"region": "PAMPEANA",
					"cargo": "Delegado Regional",
					"responsable": "Angel Ratto",
					"domicilio": "Calle 56  N° 2975",
					"codigopostal": "7630",
					"telefono": "(02262) 528253/91",
					"mail": ""
				},
	        },
	        {
	            "type": "Feature",
	            "class": "dr",
	            "icon": icon_abog,
	            "geometry": {
	                "type": "Point",
	                "coordinates": [-59.0301454,-34.0985566]
	            },
	            "properties": {
	                "id": 41,
					"codigo": "DR Zarate",
					"descripcion": "Delegacion Regional Zarate",
					"provincia": "BUENOS AIRES",
					"region": "PAMPEANA",
					"cargo": "Delegado Regional",
					"responsable": "Claudia Victoria Rodríguez",
					"domicilio": "Lavalle 124/128",
					"codigopostal": "2800",
					"telefono": "(03487) 449744 / 447542/433",
					"mail": ""
				},
	        }

	    ]
	}

	return data;
}
