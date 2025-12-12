Proyecto: Biblioteca UI – Componentes Personalizados -Autor: LUIS PANTA

Este proyecto consiste en una biblioteca de componentes UI construida con HTML, CSS y JavaScript, diseñada para mostrar elementos reutilizables como botones, tarjetas, formularios, alertas, modales y pestañas (tabs).

Su propósito es demostrar el uso de estilos personalizados aplicados mediante un archivo central llamado ui_library.css.

📂 Estructura del Proyecto
📁 proyecto-ui/
│
├── 📁 assets/
│   └── images/
│       └── placeholder.jpg
│
├── 📁 styles/
│   └── ui_library.css
│
├── 📄 index.html
├── 📄 demo_index.html
│
└── 📄 README.md   

📄 Descripción General

index.html:
Página principal donde se muestran todos los componentes UI.

demo_index.html:
Copia especial que incluye efectos, colores actualizados y un componente adicional: Tabs / Pestañas.

ui_library.css:
Archivo de estilos unificado que contiene todos los colores, sombras, bordes, botones, tarjetas, formularios, alertas, modales y estilos del componente Tabs.

🎨 Componentes Incluidos
1. Botones

Incluye botones:

Normal

Primario

Secundario

Con efectos hover y estilos personalizados.

2. Tarjetas (Cards)

Tarjeta con imagen, título, texto y botón de acción.

3. Formularios

Formulario con inputs, select y botón de envío.
Incluye focus estilo “brillo” y border personalizado.

4. Alertas

Alertas con colores distintivos:

Éxito (verde)

Error (rojo)

Información (azul)

5. Modal (Ventana Emergente)

Componente activado por JavaScript.
Incluye overlay, animación y cierre.

6. Tabs / Pestañas

Componente nuevo que agrega navegación en pestañas.
Incluye:

Botones de pestañas

Contendor de contenido

Efecto activo

Cambio dinámico por JavaScript

🧩 Código de las Tabs (Para referencia)
📌 HTML
<section id="tabs">
    <h2>Pestañas / Tabs</h2>

    <div class="ui-tabs">
        <button class="ui-tab active" onclick="openTab(event, 'tab1')">General</button>
        <button class="ui-tab" onclick="openTab(event, 'tab2')">Opciones</button>
        <button class="ui-tab" onclick="openTab(event, 'tab3')">Avanzado</button>
    </div>

    <div class="ui-tab-content active" id="tab1">
        <p>Contenido del tab "General"</p>
    </div>
    <div class="ui-tab-content" id="tab2">
        <p>Contenido del tab "Opciones"</p>
    </div>
    <div class="ui-tab-content" id="tab3">
        <p>Contenido del tab "Avanzado"</p>
    </div>
</section>

📌 CSS
.ui-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
}

.ui-tab {
    padding: 10px 18px;
    border-radius: var(--radius);
    border: none;
    cursor: pointer;
    background: #bfc4cb;
    transition: var(--transition);
    font-weight: 600;
}

.ui-tab.active {
    background: var(--color-primary);
    color: white;
}

.ui-tab-content {
    display: none;
    background: var(--color-white);
    padding: 20px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
}

.ui-tab-content.active {
    display: block;
}

📌 JavaScript
function openTab(event, tabId) {
    document.querySelectorAll(".ui-tab").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".ui-tab-content").forEach(tab => tab.classList.remove("active"));

    event.target.classList.add("active");
    document.getElementById(tabId).classList.add("active");
}


