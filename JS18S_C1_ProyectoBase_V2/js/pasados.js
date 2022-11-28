//Definicion de variables
var pasados=[];
var eventos;

$(document).ready(function () {

  //Cargue de datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "http://localhost:3000/eventos"
  }).done(function (resultado) {

    //Guardar el resultado en variables
      hoy = resultado.fechaActual;
      eventos = resultado.eventos;
      //Seleccion de los eventos que sean anteriores a la fecha actual del JSON
      for(var i = 0; i < eventos.length; i++){
        if (eventos[i].fecha < hoy){
          pasados.push(eventos[i]);
        }
      }
      //Ordena según fecha los eventos pasados
      pasados= pasados.sort(function(x,y){
        if (x.fecha < y.fecha){
          return 1;
        }
        return -1;
      }); 

      var htmlPasados = ""
    //Creación de html
      for(var j = 0; j < pasados.length; j++){
        htmlPasados += `
                    <div class="card">
                      <div class="card-body">
                        <h4><a href="detalle.html?id=${pasados[j].id}"class="card-title">${pasados[j].nombre}</a></h4>
                        <p class="card-text">${pasados[j].fecha}</p>
                        <h6 >${pasados[j].descripcion}</h6>
                      </div>
                    </div>
                    <br/>
                `
      }
      //Asignación de html a la página
      document.getElementById("pasados").innerHTML = htmlPasados

  })

});
