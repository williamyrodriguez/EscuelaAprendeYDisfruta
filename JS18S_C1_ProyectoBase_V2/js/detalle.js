// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () {

  $.ajax({
    url: "http://localhost:3000/eventos"
  }).done(function (resultado) {
    
    //llenando de variable
    eventos = resultado.eventos;
    //obteniendo el id del url
    var id = location.search.match(/id=(\d)*/)[1]

    evento = eventos.find(function (element) {
      return element.id == id
    })
    //llenando dinamicamente los eventos
    var html = `
                  <div class="card">
                    <div class="card-body">
                      <h4><a href="detalle.html?id=${evento.id}" class="card-title">${evento.nombre}</a></h4>
                      <p>${evento.fecha} - Lugar: ${evento.lugar}</p>
                      <p>Descripción: ${evento.descripcion}</p>
                      <p>Costo: ${evento.precio}</p>
                      <p>Invitados: ${evento.invitados}</p>
                    </div>
                  </div>     
                `
    document.getElementById("evento").innerHTML = html
  });
});
