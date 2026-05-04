// 1. Mostrar productos dinámicamente con JavaScript
const productos = [
  { id: 1, nombre: "Teclado", precio: 30, categoria: "perifericos" },
  { id: 2, nombre: "Ratón", precio: 20, categoria: "perifericos" },
  { id: 3, nombre: "Monitor", precio: 200, categoria: "pantallas" },
  { id: 4, nombre: "Portátil", precio: 800, categoria: "ordenadores" }
];

let carrito = [];

// Mostrar productos
function mostrarProductos(lista) {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";

  lista.forEach(prod => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${prod.nombre}</h3>
      <p>${prod.precio}€</p>
      <button onclick="añadirAlCarrito(${prod.id})">Añadir</button>
    `;
    contenedor.appendChild(div);
  });
};


// Pop up carrito
function toggleCarrito() {
  const panel = document.getElementById("carrito-panel");
  panel.classList.toggle("oculto");
};

function cerrarCarrito() {
  document.getElementById("carrito-panel").classList.add("oculto");
}

// 2. Añadir productos al carrito
function añadirAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  actualizarCarrito();
};

// Acumulacion de carrito
function agruparCarrito() {
  const agrupado = {};

  carrito.forEach(prod => {
    if (!agrupado[prod.id]) {
      agrupado[prod.id] = { ...prod, cantidad: 1 };
    } else {
      agrupado[prod.id].cantidad++;
    }
  });

  return Object.values(agrupado);
};

// 3. Mostrar carrito y total
function actualizarCarrito() {
  const lista = document.getElementById("carrito");
  const total = document.getElementById("total");
  const contador = document.getElementById("contador");

  lista.innerHTML = "";
  let suma = 0;

  const productosAgrupados = agruparCarrito();

  productosAgrupados.forEach(prod => {
    const li = document.createElement("li");

    li.innerHTML = `
        <div class="item-carrito">
            ${prod.nombre} (${prod.cantidad}) : ${prod.precio * prod.cantidad}€</span>
            <button class="btn-restar" onclick="eliminarDelCarrito(${prod.id})">−</button>
        </div>
    `;

    lista.appendChild(li);
    suma += prod.precio * prod.cantidad;
  });

  total.textContent = suma;
  contador.textContent = carrito.length;
};

// Eliminar del carrito
function eliminarDelCarrito(id) {
  const index = carrito.findIndex(p => p.id === id);

  if (index !== -1) {
    carrito.splice(index, 1); // elimina solo uno
  }

  actualizarCarrito();
}

// Pagar
function pagar() {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  alert("Compra realizada con éxito 🛍️");

  carrito = [];
  actualizarCarrito();
  cerrarCarrito();
}

// 4. Filtro por categoria
const botonesFiltro = document.querySelectorAll(".filtro-btn");

botonesFiltro.forEach(boton => {
  boton.addEventListener("click", () => {

    // Quitar activo a todos
    botonesFiltro.forEach(b => b.classList.remove("activo"));

    // Activar el clicado
    boton.classList.add("activo");

    const categoria = boton.dataset.categoria;

    if (categoria === "todos") {
      mostrarProductos(productos);
    } else {
      const filtrados = productos.filter(p => p.categoria === categoria);
      mostrarProductos(filtrados);
    }
  });
});

// 6 - 7 - 8 - 9 - 10
//  Validación formulario
document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;

  const errores = [];

  if (!nombre || !email || !password || !confirm) {
    errores.push("Todos los campos son obligatorios");
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailValido.test(email)) {
    errores.push("Email no válido");
  }

  if (password !== confirm) {
    errores.push("Las contraseñas no coinciden");
  }

  const divErrores = document.getElementById("errores");

  if (errores.length > 0) {
    divErrores.innerHTML = errores.join("<br>");
  } else {
    divErrores.innerHTML = "Formulario válido ✅";
  }
});

// Inicializar
mostrarProductos(productos);