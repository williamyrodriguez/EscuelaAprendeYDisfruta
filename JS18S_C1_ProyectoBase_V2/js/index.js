//Definicion de variables

var pasados=[];
var proximos=[];
var eventos;


$(document).ready(function () {

  //Cargue de los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "http://localhost:3000/eventos"
  }).done(function (resultado) {

    //Guarda el resultado en variables
      hoy = resultado.fechaActual;
      eventos = resultado.eventos;
      console.log(resultado)
      //Clasifica los eventos según la fecha actual del JSON
      for(var i = 0; i < eventos.length; i++){
        if (eventos[i].fecha < hoy){
          pasados.push(eventos[i]);
        }
        else {
          proximos.push(eventos[i]);
        }
      }
      
      //Clasifica según fecha los eventos pasados
      pasados = pasados.sort(function(x,y){
        if (x.fecha < y.fecha){
          return 1;
        }
        return -1;
      });
      //Clasifica según fecha los eventos proximos
      proximos= proximos.sort(function(x,y){
        if (x.fecha > y.fecha){
          return 1;
        }
        return -1;
      }); 

      var htmlPasados = ""
      var htmlProximos = ""
      //Creación de html
      for(var j = 0; j < 2; j++){
        htmlPasados += `
                  <div class="col-sm-6">
                    <div class="card">
                      <div class="card-body">
                        <h4><a href="detalle.html?id=${pasados[j].id}" class="card-title">${pasados[j].nombre}</a></h4>
                        <p class="card-text">${pasados[j].fecha}</p>
                        <h6 >${pasados[j].descripcion}</h6>
                      </div>
                    </div>
                  </div>  
                `
      }

      for(var j = 0; j < 2; j++){
        htmlProximos += `
                  <div class="col-sm-6">
                    <div class="card">
                      <div class="card-body">
                        <h4><a href="detalle.html?id=${proximos[j].id}" class="card-title">${proximos[j].nombre}</a></h4>
                        <p class="card-text">${proximos[j].fecha}</p>
                        <h6 >${proximos[j].descripcion}</h6>
                      </div>
                    </div>
                  </div> 
                `
      }
      //Asignación de html a la página
      document.getElementById("pasados").innerHTML = htmlPasados
      document.getElementById("proximos").innerHTML = htmlProximos

  })

});
