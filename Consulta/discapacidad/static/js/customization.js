


var geodjango = {};
var logo_personalizacion = new GIcon(G_DEFAULT_ICON);
logo_personalizacion.image = "/static/img/logo4.png";
logo_personalizacion.shadow = "/static/img/sombra4.png"; logo_personalizacion.shadowSize = new GSize(66, 34);
 logo_personalizacion.iconSize = new GSize(51, 34);


geodjango.map_load = function(){
  if (GBrowserIsCompatible()) {
    geodjango.map = new GMap2(document.getElementById("map"));
    geodjango.map.setCenter(new GLatLng(4.641562997, -74.095147824), 14);
    geodjango.map.setUIToDefault();
    
    
    
    
    geodjango.map_marker1 = new GMarker(new GLatLng(4.50538893,-74.11830257), {title: "MONTEBLANCO",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker1);
    GEvent.addListener(geodjango.map_marker1, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>MONTEBLANCO</span><br><span class='subtitle'>caf? internet johanna</span><br><span class='address'>Calle 93 SUR 3 22</span><br><br><span class='date_ini'><strong>Apertura:</strong> 18 de julio de 2013</span><br><span class='date_end'><strong>Cierre:</strong> 4 de septiembre de 2013</span><br></div>"); }); 
    geodjango.map_marker2 = new GMarker(new GLatLng(4.53936721,-74.08894643), {title: "NUEVA GLORIA",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker2);
    GEvent.addListener(geodjango.map_marker2, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>NUEVA GLORIA</span><br><span class='subtitle'>ciberpaty</span><br><span class='address'>Calle 48 sur 13 D 42 ESTE</span><br><br><span class='date_ini'><strong>Apertura:</strong> 30 de agosto de 2013</span><br><span class='date_end'><strong>Cierre:</strong> 30 de septiembre de 2013</span><br></div>"); }); 
    geodjango.map_marker3 = new GMarker(new GLatLng(4.62352842,-74.07245113), {title: "TEUSAQUILLO",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker3);
    GEvent.addListener(geodjango.map_marker3, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>TEUSAQUILLO</span><br><span class='subtitle'>telecomunicaciones flor de loto</span><br><span class='address'>Calle 34 17 28</span><br><br><span class='date_ini'><strong>Apertura:</strong> 6 de mayo de 2013</span><br><span class='date_end'><strong>Cierre:</strong> 8 de septiembre de 2013</span><br></div>"); }); 
    geodjango.map_marker4 = new GMarker(new GLatLng(4.56957242,-74.16387406), {title: "LA PRADERA",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker4);
    GEvent.addListener(geodjango.map_marker4, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>LA PRADERA</span><br><span class='subtitle'>fotografia mystical colors</span><br><span class='address'>Calle 73 B 44B14 SUR</span><br><br><span class='date_ini'><strong>Apertura:</strong> 6 de junio de 2013</span><br><span class='date_end'><strong>Cierre:</strong> 6 de septiembre de 2013</span><br></div>"); }); 
    geodjango.map_marker5 = new GMarker(new GLatLng(4.56559054,-74.14648654), {title: "LAS ACACIAS",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker5);
    GEvent.addListener(geodjango.map_marker5, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>LAS ACACIAS</span><br><span class='subtitle'>caf? internet pabon</span><br><span class='address'>Calle 64 sur 21 a 03</span><br><br><span class='date_ini'><strong>Apertura:</strong> 22 de julio de 2013</span><br><span class='date_end'><strong>Cierre:</strong> 4 de septiembre de 2013</span><br></div>"); }); 
    geodjango.map_marker6 = new GMarker(new GLatLng(4.59098452,-74.17927914), {title: "PRIMAVERA II",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker6);
    GEvent.addListener(geodjango.map_marker6, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>PRIMAVERA II</span><br><span class='subtitle'>variedades sergio</span><br><span class='address'>Carrera 76 A 60 B 02 Sur</span><br><br><span class='date_ini'><strong>Apertura:</strong> 22 de agosto de 2013</span><br><span class='date_end'><strong>Cierre:</strong> 22 de septiembre de 2013</span><br></div>"); }); 
    geodjango.map_marker7 = new GMarker(new GLatLng(4.54716945,-74.10829253), {title: "DIANA TURBAY",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker7);
    GEvent.addListener(geodjango.map_marker7, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>DIANA TURBAY</span><br><span class='subtitle'>caf? internet nueva tecnologia</span><br><span class='address'>Carrera 3 48 X 15 SUR</span><br><br><span class='date_ini'><strong>Apertura:</strong> 2 de julio de 2013</span><br><span class='date_end'><strong>Cierre:</strong> 6 de septiembre de 2013</span><br></div>"); }); 
    geodjango.map_marker8 = new GMarker(new GLatLng(4.58383399,-74.13840964), {title: "SAN VICENTE FERRER",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker8);
    GEvent.addListener(geodjango.map_marker8, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>SAN VICENTE FERRER</span><br><span class='subtitle'>fotografia picasso</span><br><span class='address'>Diagonal 50 A 33 01 SUR</span><br><br><span class='date_ini'><strong>Apertura:</strong> 22 de julio de 2013</span><br><span class='date_end'><strong>Cierre:</strong> 10 de septiembre de 2013</span><br></div>"); }); 
    geodjango.map_marker9 = new GMarker(new GLatLng(4.65625645,-74.07134483), {title: "SIETE DE AGOSTO",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker9);
    GEvent.addListener(geodjango.map_marker9, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>SIETE DE AGOSTO</span><br><span class='subtitle'>data moviles 1a</span><br><span class='address'>Carrera 24 64 26</span><br><br><span class='date_ini'><strong>Apertura:</strong> 18 de julio de 2013</span><br><span class='date_end'><strong>Cierre:</strong> 18 de septiembre de 2013</span><br></div>"); }); 
    geodjango.map_marker10 = new GMarker(new GLatLng(4.60645647,-74.11610206), {title: "MONTES",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker10);
    GEvent.addListener(geodjango.map_marker10, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>MONTES</span><br><span class='subtitle'>hablenaud</span><br><span class='address'>Calle 8 SUR 40 94</span><br><br><span class='date_ini'><strong>Apertura:</strong> 8 de julio de 2013</span><br><span class='date_end'><strong>Cierre:</strong> 8 de septiembre de 2013</span><br></div>"); }); 
    geodjango.map_marker11 = new GMarker(new GLatLng(4.68065422,-74.08905184), {title: "LA ESTRADA",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker11);
    GEvent.addListener(geodjango.map_marker11, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>LA ESTRADA</span><br><span class='subtitle'>caf? internet representaciones jmp</span><br><span class='address'>Carrera 69 71 53 Local 101</span><br><br><span class='date_ini'><strong>Apertura:</strong> 11 de julio de 2013</span><br><span class='date_end'><strong>Cierre:</strong> 11 de septiembre de 2013</span><br></div>"); }); 
    geodjango.map_marker12 = new GMarker(new GLatLng(4.62174003,-74.19316731), {title: "SAN PEDRO",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker12);
    GEvent.addListener(geodjango.map_marker12, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>SAN PEDRO</span><br><span class='subtitle'>servicade</span><br><span class='address'>Carrera 87 C 66 C 12 SUR</span><br><br><span class='date_ini'><strong>Apertura:</strong> 8 de julio de 2013</span><br><span class='date_end'><strong>Cierre:</strong> 8 de septiembre de 2013</span><br></div>"); }); 
    geodjango.map_marker13 = new GMarker(new GLatLng(4.5761427747,-74.0940776416), {title: "SOCIEGO",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker13);
    GEvent.addListener(geodjango.map_marker13, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>SOCIEGO</span><br><span class='subtitle'>primera de mayo</span><br><span class='address'>Estacin Primera de Mayo</span><br><br><span class='date_ini'><strong>Apertura:</strong> 1 de marzo de 2013</span><br></div>"); }); 
    geodjango.map_marker14 = new GMarker(new GLatLng(4.641562997,-74.09514782), {title: "CENTRO ADMINISTRATIVO OCC.",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker14);
    GEvent.addListener(geodjango.map_marker14, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>CENTRO ADMINISTRATIVO OCC.</span><br><span class='subtitle'>gobernaci¢n</span><br><span class='address'>Cl 26 52-00</span><br><br><span class='date_ini'><strong>Apertura:</strong> 9 de junio de 2013</span><br></div>"); }); 
    geodjango.map_marker15 = new GMarker(new GLatLng(4.647083,-74.100699), {title: "CIUDAD SALITRE NOR-ORIENTAL",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker15);
    GEvent.addListener(geodjango.map_marker15, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>CIUDAD SALITRE NOR-ORIENTAL</span><br><span class='subtitle'>can</span><br><span class='address'>Estaci¢n Can</span><br><br><span class='date_ini'><strong>Apertura:</strong> 14 de marzo de 2013</span><br></div>"); }); 
    geodjango.map_marker16 = new GMarker(new GLatLng(4.657471481,-74.10533598), {title: "JARDIN BOTANICO",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker16);
    GEvent.addListener(geodjango.map_marker16, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>JARDIN BOTANICO</span><br><span class='subtitle'>el tiempo</span><br><span class='address'>Cl 26 68d-00</span><br><br><span class='date_ini'><strong>Apertura:</strong> 9 de junio de 2013</span><br></div>"); }); 
    geodjango.map_marker17 = new GMarker(new GLatLng(4.601426914,-74.076990948), {title: "LA CATEDRAL",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker17);
    GEvent.addListener(geodjango.map_marker17, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>LA CATEDRAL</span><br><span class='subtitle'>san victorino</span><br><span class='address'>Estaci¢n San Victorino</span><br><br><span class='date_ini'><strong>Apertura:</strong> 23 de marzo de 2013</span><br></div>"); }); 
    geodjango.map_marker18 = new GMarker(new GLatLng(4.6064008186,-74.074052948), {title: "LA CAPUCHINA",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker18);
    GEvent.addListener(geodjango.map_marker18, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>LA CAPUCHINA</span><br><span class='subtitle'>las nieves</span><br><span class='address'>Estaci¢n Las Nieves</span><br><br><span class='date_ini'><strong>Apertura:</strong> 15 de marzo de 2013</span><br></div>"); }); 
    geodjango.map_marker19 = new GMarker(new GLatLng(4.5654013205,-74.0980815375), {title: "SURAMERICA",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker19);
    GEvent.addListener(geodjango.map_marker19, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>SURAMERICA</span><br><span class='subtitle'>portal 20 julio kiosko peatonal</span><br><span class='address'>Cr 5A 30d-00S</span><br><br><span class='date_ini'><strong>Apertura:</strong> 9 de junio de 2013</span><br></div>"); }); 
    geodjango.map_marker20 = new GMarker(new GLatLng(4.5659220602,-74.097149992), {title: "SURAMERICA",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker20);
    GEvent.addListener(geodjango.map_marker20, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>SURAMERICA</span><br><span class='subtitle'>portal 20 julio alimentaci¢n</span><br><span class='address'>Cr 5a 30d-00S</span><br><br><span class='date_ini'><strong>Apertura:</strong> 9 de junio de 2013</span><br></div>"); }); 
    geodjango.map_marker21 = new GMarker(new GLatLng(4.5656674763,-74.0975029378), {title: "SURAMERICA",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker21);
    GEvent.addListener(geodjango.map_marker21, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>SURAMERICA</span><br><span class='subtitle'>portal 20 julio kiosko plataforma troncal</span><br><span class='address'>Cr 5a 30d-00S</span><br><br><span class='date_ini'><strong>Apertura:</strong> 9 de junio de 2013</span><br></div>"); }); 
    geodjango.map_marker22 = new GMarker(new GLatLng(4.605189,-74.066808), {title: "LAS AGUAS",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker22);
    GEvent.addListener(geodjango.map_marker22, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>LAS AGUAS</span><br><span class='subtitle'>universidades</span><br><span class='address'>UNIVERSIDADES</span><br><br><span class='date_ini'><strong>Apertura:</strong> 27 de abril de 2013</span><br></div>"); }); 
    geodjango.map_marker23 = new GMarker(new GLatLng(4.63761573,-74.0673365), {title: "QUESADA",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker23);
    GEvent.addListener(geodjango.map_marker23, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>QUESADA</span><br><span class='subtitle'>caf? internet de peluches yoli</span><br><span class='address'>Calle 50 14 94</span><br><br><span class='date_ini'><strong>Apertura:</strong> 28 de agosto de 2013</span><br><span class='date_end'><strong>Cierre:</strong> 28 de septiembre de 2013</span><br></div>"); }); 
    geodjango.map_marker24 = new GMarker(new GLatLng(4.75815644,-74.0256242), {title: "SAN ANTONIO NORTE",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker24);
    GEvent.addListener(geodjango.map_marker24, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>SAN ANTONIO NORTE</span><br><span class='subtitle'>miscelanea sancho</span><br><span class='address'>Carrera 7 181 a 29</span><br><br><span class='date_ini'><strong>Apertura:</strong> 30 de agosto de 2013</span><br><span class='date_end'><strong>Cierre:</strong> 30 de septiembre de 2013</span><br></div>"); }); 
    geodjango.map_marker25 = new GMarker(new GLatLng(4.6843277,-74.10494988), {title: "VILLA LUZ",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker25);
    GEvent.addListener(geodjango.map_marker25, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>VILLA LUZ</span><br><span class='subtitle'>servicio tecnito jireth</span><br><span class='address'>Carrera 77 A 65 A 52</span><br><br><span class='date_ini'><strong>Apertura:</strong> 8 de junio de 2013</span><br><span class='date_end'><strong>Cierre:</strong> 8 de septiembre de 2013</span><br></div>"); }); 
    geodjango.map_marker26 = new GMarker(new GLatLng(4.67885206,-74.04538104), {title: "CHICO NORTE II SECTOR",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker26);
    GEvent.addListener(geodjango.map_marker26, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>CHICO NORTE II SECTOR</span><br><span class='subtitle'>caf? calle 95</span><br><span class='address'>Carrera 11 95 37</span><br><br><span class='date_ini'><strong>Apertura:</strong> 12 de junio de 2013</span><br><span class='date_end'><strong>Cierre:</strong> 12 de septiembre de 2013</span><br></div>"); }); 
    geodjango.map_marker27 = new GMarker(new GLatLng(4.59977418,-74.10209809), {title: "SANTA ISABEL",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker27);
    GEvent.addListener(geodjango.map_marker27, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>SANTA ISABEL</span><br><span class='subtitle'>conexiones comunicaciones</span><br><span class='address'>Calle 1 F 29 12</span><br><br><span class='date_ini'><strong>Apertura:</strong> 30 de agosto de 2013</span><br><span class='date_end'><strong>Cierre:</strong> 30 de septiembre de 2013</span><br></div>"); }); 
    geodjango.map_marker28 = new GMarker(new GLatLng(4.6808812667,-74.1210548717), {title: "SANTA CECILIA",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker28);
    GEvent.addListener(geodjango.map_marker28, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>SANTA CECILIA</span><br><span class='subtitle'>portal dorado alimentaci¢n sur</span><br><span class='address'>Calle 26 86-03</span><br><br><span class='date_ini'><strong>Apertura:</strong> 9 de junio de 2013</span><br></div>"); }); 
    geodjango.map_marker29 = new GMarker(new GLatLng(4.67185787,-74.14724793), {title: "EL CARMEN FONTIBON",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker29);
    GEvent.addListener(geodjango.map_marker29, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>EL CARMEN FONTIBON</span><br><span class='subtitle'>studio 100</span><br><span class='address'>Carrera 100 16 H 10</span><br><br><span class='date_ini'><strong>Apertura:</strong> 8 de mayo de 2013</span><br><span class='date_end'><strong>Cierre:</strong> 8 de octubre de 2013</span><br></div>"); }); 
    geodjango.map_marker30 = new GMarker(new GLatLng(4.66962771,-74.05556923), {title: "ANTIGUO COUNTRY",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker30);
    GEvent.addListener(geodjango.map_marker30, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>ANTIGUO COUNTRY</span><br><span class='subtitle'>fotografico imagen digital</span><br><span class='address'>Carrera 15 84 57</span><br><br><span class='date_ini'><strong>Apertura:</strong> 2 de septiembre de 2013</span><br><span class='date_end'><strong>Cierre:</strong> 2 de octubre de 2013</span><br></div>"); }); 
    geodjango.map_marker31 = new GMarker(new GLatLng(4.55036428,-74.1598972), {title: "EL MIRADOR",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker31);
    GEvent.addListener(geodjango.map_marker31, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>EL MIRADOR</span><br><span class='subtitle'>llamadas anderson</span><br><span class='address'>Carrera 27 B 71 H 23 SUR</span><br><br><span class='date_ini'><strong>Apertura:</strong> 10 de julio de 2013</span><br><span class='date_end'><strong>Cierre:</strong> 10 de septiembre de 2013</span><br></div>"); }); 
    geodjango.map_marker32 = new GMarker(new GLatLng(4.6806771526,-74.1207002734), {title: "LOS ALAMOS",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker32);
    GEvent.addListener(geodjango.map_marker32, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>LOS ALAMOS</span><br><span class='subtitle'>portal dorado kiosko peatonal oriental</span><br><span class='address'>Calle 26 86-00</span><br><br><span class='date_ini'><strong>Apertura:</strong> 9 de junio de 2013</span><br></div>"); }); 
    geodjango.map_marker33 = new GMarker(new GLatLng(4.6807945709,-74.1203718355), {title: "LOS ALAMOS",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker33);
    GEvent.addListener(geodjango.map_marker33, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>LOS ALAMOS</span><br><span class='subtitle'>portal dorado alimentaci¢n norte</span><br><span class='address'>Calle 26 86-01</span><br><br><span class='date_ini'><strong>Apertura:</strong> 9 de junio de 2013</span><br></div>"); }); 
    geodjango.map_marker34 = new GMarker(new GLatLng(4.6807945709,-74.1203718355), {title: "LOS ALAMOS",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker34);
    GEvent.addListener(geodjango.map_marker34, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>LOS ALAMOS</span><br><span class='subtitle'>portal dorado alimentaci¢n norte</span><br><span class='address'>Calle 26 86-01</span><br><br><span class='date_ini'><strong>Apertura:</strong> 30 de abril de 2013</span><br></div>"); }); 
    geodjango.map_marker35 = new GMarker(new GLatLng(4.63232492,-74.20275067), {title: "SAN BERNARDINO XIX",icon: logo_personalizacion});
    geodjango.map.addOverlay(geodjango.map_marker35);
    GEvent.addListener(geodjango.map_marker35, "click", function() { geodjango.map.setCenter(this.getLatLng()); this.openInfoWindow("<div class='custom_tooltip'><span class='title'>SAN BERNARDINO XIX</span><br><span class='subtitle'>papeleria sonia</span><br><span class='address'>Carrera 97 C 71 47 SUR</span><br><br><span class='date_ini'><strong>Apertura:</strong> 4 de junio de 2013</span><br><span class='date_end'><strong>Cierre:</strong> 4 de septiembre de 2013</span><br></div>"); }); 
    
    
    
  }else {
    alert("Sorry, the Google Maps API is not compatible with this browser.");
  }
}

