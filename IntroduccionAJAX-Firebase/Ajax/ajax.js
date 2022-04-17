$(document).ready(function() {
  /**
   * Ejecutamos la funcion a la hora de hacer click en el boton.
   */  
  $("#boton").mouseup(function() {
      if(validacion()) {
        $.ajax({
          url: './database.json',
          dataType: 'json',
          type: 'GET',
          async: true,
          success: function (respuesta) {
            // Comprobamos si se ha encontrado algun resultado.
            var found = false;
            var ocurrencias = '';
            // Buscamos personas por fecha de nacimiento.
            respuesta.forEach(persona => {
                if(persona.nacimiento == $("#input-nacimiento").val()) {
                    console.log(persona);
                    found = true;
                    ocurrencias += `<p><b>Nombre:</b> ${persona.name}<br>  
                    <b>Email:</b> ${persona.email}<br>
                    <b>Año de nacimiento:</b> ${persona.nacimiento}<br>
                    <b>Metodo de pago:</b> ${persona.modPago}.<br></p>`;
                }
            });            
            // Mostramos mensaje de error si no se encuentran coincidencias.
            if(!found) $("#resultado").html(`<p style="color: red">No se ha encontrado ninguna coincidencia</p>`);
            else $("#resultado").html(ocurrencias);
          },
          error: function () {
            alert('ERROR: Se ha producido un error al realizar la petición del servicio.');
          }
        });
      }
    });
    /**
     * Función de validación del input.
     * @returns Devuelve un booleano indicando si el campo es válido o no.
     */
    function validacion() {
      var valor = $("input").val();
      if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
        alert('ERROR: Es un campo obligatorio, debe introducir un número.');
        return false;
      } else if( isNaN(valor) ) {
          alert('ERROR: Debe introducir un valor numérico.')
          return false;
      }
      return true;
      }
  });