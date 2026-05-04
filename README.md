# 🛒 TechMarket - Proyecto Entorno Cliente
Repositorio usado para practicar HTML - CSS - Javascript en Desarrollo Entorno Cliente.

## 📌 Descripción

TechMarket es una tienda online de productos tecnológicos desarrollada como parte del módulo de **Desarrollo en Entorno Cliente (DAW)**.

El objetivo del proyecto es mejorar la experiencia de usuario mediante una interfaz dinámica creada con **HTML, CSS y JavaScript**, permitiendo la interacción sin recargas de página.

---

## 🎯 Funcionalidades principales

✔ Mostrar productos dinámicamente con JavaScript  
✔ Filtrar productos por categoría  
✔ Añadir productos a un carrito  
✔ Visualizar el contenido del carrito  
✔ Calcular el precio total automáticamente  
✔ Formulario de compra con validación en cliente  

---

## 🧱 Tecnologías utilizadas

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  

---

## 📦 Estructura de datos

Los productos se gestionan mediante un array en JavaScript:

```javascript
const productos = [
  { id: 1, nombre: "Teclado", precio: 30, categoria: "perifericos" },
  { id: 2, nombre: "Ratón", precio: 20, categoria: "perifericos" },
  { id: 3, nombre: "Monitor", precio: 200, categoria: "pantallas" },
  { id: 4, nombre: "Portátil", precio: 800, categoria: "ordenadores" }
];
