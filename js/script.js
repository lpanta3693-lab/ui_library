/* ============================================
   MODAL - Abrir y cerrar
============================================ */

// Abrir modal
function openModal() {
    document.getElementById("modal").style.display = "flex";
}

// Cerrar modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

/* ============================================
   TABS - Cambio de pestañas
============================================ */

document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".ui-tab-btn");
    const tabContents = document.querySelectorAll(".ui-tab-content");

    tabButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            
            // Quitar clase "active" a todos los botones
            tabButtons.forEach(b => b.classList.remove("active"));
            
            // Quitar "active" al contenido
            tabContents.forEach(c => c.classList.remove("active"));

            // Activar botón seleccionado
            btn.classList.add("active");

            // Activar contenido según el índice del botón
            tabContents[index].classList.add("active");
        });
    });
});
