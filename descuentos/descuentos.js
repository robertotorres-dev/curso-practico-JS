// Funcion para calcular el descuento
function calcularPrecioConDescuento(precio, cupon) {
  switch (cupon) {
    case "1":
      descuento = 15;
      break;
    case "2":
      descuento = 25;
      break;
    case "3":
      descuento = 50;
      break;
    default:
      break;
  }

  console.log(descuento);
  const porcentajePrecioConDescuento = 100 - descuento;
  return (precio * porcentajePrecioConDescuento) / 100;
}

//

function botonPrecioFinal() {
  const precio = document.getElementById("inputPrecio").value;
  const cupon = document.getElementById("selectCupones").value;

  const textPrecioConDescuento = document.getElementById("precioConDescuento");

  precioConDescuento = calcularPrecioConDescuento(precio, cupon);

  textPrecioConDescuento.innerHTML = `$ ${precioConDescuento}`;
}
