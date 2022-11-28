function validar(formulario) {
  //Validacion nombre vacio
  if (formulario.nombres.value.trim().length == 0){
    document.getElementById("errornombres").innerText = "Este campo es obligatorio";
    formulario.nombres.focus();
    return false;
  }
   //Validacion nombre muy corto
  if (formulario.nombres.value.trim().length < 3) {
    document.getElementById("errornombres").innerText = "Campo inválido";
    formulario.nombres.focus();
    return false;
  }
   //Validacion email
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerText = "Campo inválido";
    formulario.email.focus();
    return false;
  }
   //Validacion contraseña vacia
  if (formulario.contrasena.value.trim().length == 0) {
    document.getElementById("errorContrasena").innerText = "Este campo es obligatorio";
    formulario.contrasena.focus();
    return false;
  }
   //Validacion contraseña muy corta
  if (formulario.contrasena.value.trim().length < 7) {
    document.getElementById("errorContrasena").innerText = "Debe tener al menos 7 caracteres)";
    formulario.contrasena.focus();
    return false;
  }
   //Validacion confirmacion de contraseña vacia
  if (formulario.confirmacion.value.trim().length == 0) {
    document.getElementById("errorConfirmacion").innerText = "Este campo es obligatorio";
    formulario.confirmacion.focus();
    return false;
  }
   //Validacion de coincidencia de contraseñas
  if (formulario.contrasena.value != formulario.confirmacion.value) {
    document.getElementById("errorConfirmacion").innerText = "No coincide con contraseña";
    formulario.confirmacion.focus();
    return false;
  }
   //Validacion tipo de usuario
  if (formulario.tipo.value == "-1") {
    document.getElementById("errorTipo").innerText = "Este campo es obligatorio";
    formulario.tipo.focus();
    return false;
  }
   //Validacion aceptacion de terminos
  if (!formulario.acepto.checked) {
    document.getElementById("errorAcepto").innerText = "Debe aceptar los términos y condiciones";
    formulario.acepto.focus();
    return false;
  }
   //Validacion de envio de datos
  alert("Datos enviados");
  return true;

}
