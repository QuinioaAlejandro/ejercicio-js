// CONDICIONALES

let color = prompt("Elegí un color");

if (color) {
  console.log("Elegiste el color " + color);
} else {
  alert("No elegiste ningún color");
}

let cantidadPares = Number(prompt("¿Cuántas pares?"));

if (cantidadPares == 0) {
  console.log("no lleva zapatillas");
} else if (cantidadPares < 12) {
  console.log("lleva mas de un par");
} else if (cantidadPares == 12) {
  console.log("lleva una docenalleva 6 pares");
} else if (cantidadPares < 24) {
  console.log("lleva más de 6 pares");
} else {
  console.log("lleva demasiados pares");
}

// CICLO

let Marca = prompt("Elegí una marca?");

switch (Marca) {
  case "Nike":
    console.log("elegiste el color" + Marca);
    break;
  case "puma":
    console.log("elegiste el color " + Marca);
    break;
    case "Asics":
      console.log("elegiste el color " + Marca);
    break;
    case "New Balance":
      console.log("elegiste el color " + Marca);
    break;
   
    case "le cost sportif":
      console.log("elegiste el color " + Marca);
    break;
    case "sergio tacchini":
      console.log("elegiste el color " + Marca);
    break;
    case "Vans":
      console.log("elegiste el color " + Marca);
    break;
  default:
    if (Marca="") {
      alert("¿Estás seguro de queres no queres comprar nada?")
    }else {
      alert("No trabajamos esa Marca.")
    }
    break;
}

let carrito = 0;
let agregar = Number(prompt("¿Cuántos quiere agregar al carrito?"));


for(let i=0; i<1; i++) {
  mensaje = prompt("Ingrese un mensaje para la tarjeta del ramo.");
  if (mensaje=="") {
    console.log("usted no ha ingresado ningún mensaje.")
  } else{
    console.log("ingresaste un mensaje existosamente.");
  }
  
}

// FUNCION

function seleccion(medias) {
  console.log("usted eligió una" + medias);
}

let flor = prompt("elija un par de medias");
seleccion(flor);

let cantidad01 = prompt("elija la cantidad de" + medias);
let cantidad02 = prompt("elija la cantidad de rosas");

const suma = (cantidad01, cantidad02) => {return cantidad01 + cantidad02;}

let ramoCompleto = suma(cantidad01, cantidad02);
console.log("está llevando: " + marca + "color");

const iva   = x => x * 0.21
