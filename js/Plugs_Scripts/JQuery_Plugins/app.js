
   // Nuestro código irá aquí, seran 2 objetos con las siguientes opciones seteadas

   var arregloPines = [];


   function agregarMarcador(location){

      var pin = new google.maps.Marker({
         position : location,
         map : map,
         // animation : google.maps.Animation.DROP //Una de tantas animaciones
      });

      console.log("latitud : ", location.lat());
      console.log("longitud : ", location.lng());

      //agregar el pin al arregloPines, el ciclo sirve para resetear el arreglo.

      // for (var i in arregloPines) {
      //    arregloPines[i].setMap(null);
      // }

      arregloPines.push(pin);

   }

   var cuerpo = document.querySelector("body");

      cuerpo.addEventListener("load", function(event) {
      cargar_mapa();
      });


   function cargar_mapa(){

      var myOptions= {
         zoom : 15,
         center : new google.maps.LatLng( 19.435200,-99.141200 ),
         mapTypeId : google.maps.MapTypeId.ROADMAP
      };

      map = new google.maps.Map(document.getElementById("gmap"), myOptions);

      map.addListener('click', function(event) {
         console.log(event);
         agregarMarcador(event.latLng);//esta antes de la funcion cargar_mapa()
      });

      var pin = new google.maps.Marker({
         position : new google.maps.LatLng( 19.435200,-99.141200),
         map : map,
         title : "Mi primer mapa!"
      });

      arregloPines.push(pin);



   };
