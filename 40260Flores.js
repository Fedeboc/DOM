let contenedor = document.getElementById("contenedor");

let seccion = prompt("Lista de Crypto(x) o Descuento de cliente(%)");

if (seccion === "x") {
   let productos = ["BTC", "ETH", "BNB", "SOL"];
    let contenedor = document.getElementById("contenedor");

for(const producto of productos){
  let li = document.createElement("li");
  li.innerHTML = producto;
  contenedor.append(li);
}
} else if (seccion === "%") {


let contenedor = document.getElementById("contenedor");
let productos = [
  { id: 1, nombre: "BTC", precio: 19839 },
  { id: 2, nombre: "ETH", precio: 1556 },
  { id: 3, nombre: "BNB", precio: 295 },
  { id: 4, nombre: "SOL", precio: 35.81 },
];


for(const producto of productos){
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${producto.id}</h2>
    <p>Producto: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
  `;

  contenedor.append(div);
}

}else{
  contenedor.innerHTML = "<h1>Bienvenido a swap</h1>";
}