const contenedorproductosEnCarrito = JSON.parse(localStorage.getItem("productos-En-Carrito"));

const contenedorCarritoVacio = document.querySelector("#carritoVacio");
const contenedorCarritoProductos = document.querySelector("#carritoProductos");
const contenedorCarritoBotones = document.querySelector("#carritoBotones")


if (contenedorproductosEnCarrito) {
    
    contenedorCarritoVacio.classList.add("ocultar");
    contenedorCarritoProductos.classList.remove("ocultar");
    contenedorCarritoBotones.classList.remove("ocultar");

    contenedorCarritoProductos.innerHTML = "";

    productosEnCarrito.forEach(producto => {
        
        const div = document.createElement("div");
        div.classList.add("carritoProducto");
        div.innerHTML = `
                        <img class="carritoProductoImagen" src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="productoNombreCarrito">
                            <small>Nombre:</small>
                            <h4>${producto.titulo}</h4>
                        </div>
                        <div class="productoCantidadCarrito">
                            <small>Cantidad:</small>
                            <h4>${producto.cantidad}</h4>
                        </div>
                        <div class="productoPrecioCarrito">
                            <small>Precio:</small>
                            <h4>$${producto.precio}</h4>
                        </div>
                        <button class="eliminarProducto" id="${producto.id}"><i class="bi bi-trash3"></i></button>
    `;
        contenedorCarritoProductos.append(div)
    })
    

}else {

};