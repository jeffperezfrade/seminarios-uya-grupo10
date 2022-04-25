/**
 * No es necesario tener un JSON predefinido como pone en el guión, lo podemos crear dinámicamente.
 * Cabe destacar que el objeto creado tiene la misma estructura que un JSON.
 */
let usuario = new Object;
usuario.nombre = 'Jeff';
usuario.apellidos = 'Perez Frade'
/**
 * Función que se ejecuta al dar click en el botón MOSTRAR TEXTO
 * Muestra el texto introducido en el text área debajo del botón.
 */
function showText() {
  let resDiv = document.querySelector('.texto-introducido');
  //resDiv.innerHTML = '';
  let inputText = document.getElementById('textarea1').value;
  resDiv.innerHTML += `<p>${inputText}</p>`;
}
/**
 * Cuenta cuentas etiquetas se encuentran dentro del ID pasado por parámetro.
 * @param {*} ID del contenedor de toda la página.
 * @param {*} label Etiqueta a contar.
 */
function countLabels(ID, label) {
  let resDiv = document.querySelector('.num-etiquetas');
  var obj = document.getElementById(ID);
  var index = 0, itemCount = 0;
  while(obj.getElementsByTagName(label) [index++]) itemCount++;
  resDiv.innerHTML += `<p>Número de etiquetas ${label}: ${itemCount}</p>`;
}
/**
 * Función que se ejecuta al dar click en el botón CONTAR ETIQUETAS.
 */
function contarLabels() {
  let resDiv = document.querySelector('.num-etiquetas');
  // Reset de los valores anteriores.
  resDiv.innerHTML = '';
  // Llama varias veces a esta función para contar etiquetas diferentes (segundo parámetro).
  countLabels('container-all-page', 'p');
  countLabels('container-all-page', 'li');
  countLabels('container-all-page', 'div');
}
/**
 * Función que al dar click en PAGAR se ejecuta y muestra los resultados.
 * Calcula el subtotal y el total con el descuento.
 */
function pagarCompra() {
  // Inicializamos el div del resumen de la compra.
  let resumenCompra = document.querySelector('.resumen-compra');
  // Reseteamos el div.
  resumenCompra.innerHTML = "";
  // Leemos los inputs.
  let dni = document.getElementById('dni').value;
  let nacimiento = document.getElementById('nacimiento').value;
  let numCuenta = document.getElementById('num-cuenta').value;
  let modPago = document.getElementById('mod-pago').value;
  // Guardamos la información del usuario en su objeto.
  usuario.dni = dni;
  usuario.nacimiento = nacimiento;
  usuario.numCuenta = numCuenta;
  usuario.modPago = modPago;
  // Mostramos la información del usuario por consola.
  console.log(usuario);
  let descuento = document.getElementById('descuento').value;
  // Subtotal sin aplicar descuento.
  var subTotal = 0;
  // Sumamos lo que el usuario haya elegido comprar.
  if(document.getElementById('samsung').checked) subTotal += 830;
  if(document.getElementById('iphone').checked) subTotal += 1100;
  if(document.getElementById('xiaomi').checked) subTotal += 950;
  // Calculamos el total junto con el descuento.
  let total = subTotal - (subTotal * (descuento / 100));
  // Fecha en la que será efectuado el pago.
  let fechaEntrega;
  // Si el método de Pago no es a Crédito se pondrá la fecha de pago al dia siguiente.
  if (usuario.modPago !== 'Credito') {
    fechaEntrega = new Date();
    fechaEntrega.setDate(fechaEntrega.getDate() + 1);
  } else {
    fechaEntrega = new Date().toDateString();
  }
  // Mostramos el mensaje de manera dinámica.
  resumenCompra.innerHTML += `<p style="font-size: 25px"><b>Resumen de la compra:</b></p>
    <p><b>Nombre:</b> ${usuario.nombre}</p>
    <p><b>Apellidos:</b> ${usuario.apellidos}</p>
    <p><b>DNI:</b> ${usuario.dni}</p>
    <p><b>Año de nacimiento:</b> ${usuario.nacimiento}</p>
    <p><b>Número de cuenta:</b> ${usuario.numCuenta}</p>
    <p><b>Método de pago:</b> ${usuario.modPago}</p>
    <p style="font-size: 20px"><b>SUBTOTAL:</b> ${subTotal}€</p>
    <p style="font-size: 15px"><b>Descuento:</b> ${descuento}%</p>
    <p style="font-size: 20px"><b>TOTAL A PAGAR:</b> ${total}€</p>
    <p><b>Nota:</b> El pago se efectuará el ${fechaEntrega}</p>`;
}