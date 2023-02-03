// PRODUCTOS
const productos = [
    // Placas de video
    {
        id: "video-01",
        titulo: "2060 Super",
        imagen: "./img/Placas de video/2060-super.jpg",
        categoria: {
            nombre: "Placas de video",
            id: "placasDeVideo"
        },
        precio: 130000
    },
    {
        id: "video-02",
        titulo: "3060 TI",
        imagen: "./img/Placas de video/3060-TI.jpg",
        categoria: {
            nombre: "Placas de video",
            id: "placasDeVideo"
        },
        precio: 180000
    },
    {
        id: "video-03",
        titulo: "3070",
        imagen: "./img/Placas de video/3070.jpg",
        categoria: {
            nombre: "Placas de video",
            id: "placasDeVideo"
        },
        precio: 210000
    },
    {
        id: "video-04",
        titulo: "5500 xt",
        imagen: "./img/Placas de video/5500 xt.jpg",
        categoria: {
            nombre: "Placas de video",
            id: "placasDeVideo"
        },
        precio: 190000
    },
    {
        id: "video-05",
        titulo: "6900 xt",
        imagen: "./img/Placas de video/6900 xt.jpg",
        categoria: {
            nombre: "Placas de video",
            id: "placasDeVideo"
        },
        precio: 240000
    },
    // CPU
    {
        id: "procesador-01",
        titulo: "intel I9",
        imagen: "./img/cpu/Procesador-IntelCorei9-12900K--5.2Ghz-AlderLake-1700-SinCooler_41360_1.jpeg",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 120000
    },
    {
        id: "procesador-02",
        titulo: "Ryzen 5 4600G",
        imagen: "./img/cpu/Ryzen 5 4600G.jpg",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 90000
    },
    // Mouse
    {
        id: "mouse-01",
        titulo: "Mouse G730",
        imagen: "./img/mouse/G703.jpg",
        categoria: {
            nombre: "Perifericos",
            id: "perifericos"
        },
        precio: 8000
    },
    //Ram
    {
        id: "ram-01",
        titulo: "Ram hyperex",
        imagen: "./img/ram/Ram hyperex.jpg",
        categoria: {
            nombre: "Perifericos",
            id: "perifericos"
        },
        precio: 10000
    },
    //Teclados
    {
        id: "teclado-01",
        titulo: "K380",
        imagen: "./img/teclado/K380.jpg",
        categoria: {
            nombre: "Perifericos",
            id: "perifericos"
        },
        precio: 7000
    },
    //Auriculares
    {
        id: "auricular-01",
        titulo: "G733",
        imagen: "./img/auriculares/concepto-g733.jpg",
        categoria: {
            nombre: "Perifericos",
            id: "perifericos"
        },
        precio: 8000
    },
    {
        id: "auricular-02",
        titulo: "G935",
        imagen: "./img/auriculares/sin-titulo-41-3e9fdbc27ae466934b16511673408634-1024-1024.jpg",
        categoria: {
            nombre: "Auriculares",
            id: "perifericos"
        },
        precio: 10000
    }
];

const elegirProductos = document.querySelector("#Productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const cambiarTitulo = document.querySelector("#tituloP");
let botonesAgregar =  document.querySelectorAll(".productoBoton")
const contador = document.querySelector("#contador")

function cargarProductos(productosElegidos) {

    elegirProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        let div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="productoImagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="productoDatos">
                <h2 class="productoTexto">${producto.titulo}</h2>
                <p class="productoPrecio">$ ${producto.precio}</p>
                <button class="productoBoton" id="${producto.id}">Agregar al carrito</button>
            </div>
        `;
        elegirProductos.append(div);
        actualizarBotones();
    })
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id  != "todos") {
            const prodcutoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id); 
            cambiarTitulo.innerText = prodcutoCategoria.categoria.nombre;
            const productosEleccion = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosEleccion);
        } else {
            cambiarTitulo.innerText = "Todos los Porductos";
            cargarProductos(productos);
        }
    });
})

function actualizarBotones() {
    botonesAgregar =  document.querySelectorAll(".productoBoton");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);

    })
}

const productosEnCarrito = [];

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    };
    actualizarContador();

    localStorage.setItem("productos-En-Carrito", JSON.stringify(productosEnCarrito));
}

function actualizarContador() {
    let nuevoContador = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    contador.innerText = nuevoContador
}