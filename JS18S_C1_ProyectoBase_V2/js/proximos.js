//Definicion de variables
var proximos=[];
var eventos;

$(document).ready(function () {

  //Cargue de datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "http://localhost:3000/eventos"
  }).done(function (resultado) {

    //Guarda el resultado en variables
      hoy = resultado.fechaActual;
      eventos = resultado.eventos;
      //Seleccion de los eventos que sean posteriores a la fecha actual del JSON
      for(var i = 0; i < eventos.length; i++){
        if (eventos[i].fecha >hoy){
          proximos.push(eventos[i]);
        }
      }
      //Ordena según fecha los eventos pasados
      proximos= proximos.sort(function(x,y){
        if (x.fecha > y.fecha){
          return 1;
        }
        return -1;
      }); 

      var htmlProximos = ""
      //Creación de html
      for(var j = 0; j < proximos.length; j++){
        htmlProximos += `
                    <div class="card">
                      <div class="card-body">
                        <h4><a href="detalle.html?id=${proximos[j].id}"class="card-title">${proximos[j].nombre}</a></h4>
                        <p class="card-text">${proximos[j].fecha}</p>
                        <h6 >${proximos[j].descripcion}</h6>
                      </div>
                    </div>
                    <br/>
                `
      }
      //Asignación de html a la página
      document.getElementById("proximos").innerHTML = htmlProximos

  })

});
