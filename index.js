let abrir = document.querySelector('.abrir');
let cerrar = document.querySelector('.close');
let contenedor = document.querySelector('.contenedor-modal');
let modaldos = document.querySelector('.contenedor-modal-2');
let botonmodaldos = document.querySelector('.bm');
let cerrardos = document.querySelector('.cerrarm');
let botontres = document.querySelector('.boton-modal-tres');
let modaltres = document.querySelector('.contenedor-modal-3');
let cerrartres = document.querySelector('.closetres');

abrir.addEventListener("click", () => {
    contenedor.classList.add('show');
});

cerrar.addEventListener("click", () => {
    contenedor.classList.add('show-2');
});

botonmodaldos.addEventListener("click", () =>{
    modaldos.classList.add('show-3');
});

cerrardos.addEventListener("click", () => {
    modaldos.classList.add('show-4');
});

botontres.addEventListener("click", () => {
/*     modaltres.classList.add(''); */
    alert("Me quedo grande muchachos :(");
});

cerrartres.addEventListener("click", () => {
    modaltres.classList.add("");
});
