// OBJETOS Y ARRAYS //

class Zapatillas{
constructor(precio, marca, modelo, genero){
this.precio = precio;
this.marca = marca;
this.modelo = modelo;
this.genero = genero;
}
SumaIva() {
  this.precio + this.precio * 1.21;
  console.log(this.precio);
}
}

const productos = [];

productos.push (new Zapatillas(32000, "nike", "deportiva", "hombre"));
productos.push (new Zapatillas(20000, "le cost sportif", "urbano", "mujer"));
productos.push (new Zapatillas(30800, "sergio tacchini", "deportiva", "hombre"));
productos.push (new Zapatillas(39600, "puma", "deportiva", "mujer"));


for (const Zapatillas of productos){
Zapatillas.SumaIva();
}

const femenina = productos.filter((el) => el.genero.includes("mujer"));
const barata = productos.filter((el) => el.precio < 30000)
const masculino = productos.filter((el) => el.genero.includes("hombre"));

console.log(femenina);
console.log(barata);
console.log(masculino);

const busqueda = productos.find((el) => el.marca === "puma");
console.log(busqueda);


const precios = precios.map((el) => el.precios)
const sumaPrecios = precios.reduce((a, b) => + a + b, 0)
console.log(sumaPrecios);

let cantidad = productos.length;
console.log(cantidad);

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
    console.log("elegiste el marca" + Marca);
    break;
  case "puma":
    console.log("elegiste el marca " + Marca);
    break;
    case "Asics":
      console.log("elegiste el marca " + Marca);
    break;
    case "New Balance":
      console.log("elegiste el marca " + Marca);
    break;
   
    case "le cost sportif":
      console.log("elegiste el marca " + Marca);
    break;
    case "sergio tacchini":
      console.log("elegiste el marca " + Marca);
    break;
    case "Vans":
      console.log("elegiste el marca " + Marca);
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
