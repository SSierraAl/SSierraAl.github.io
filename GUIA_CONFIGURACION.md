# 📘 Guía de Configuración - Mazarino Website

## ¿Cómo Funciona?


```
┌─────────────────────────────────────────────────────────┐
│  config.json  ──►  js/config-loader.js  ──►  index.html │
│  (Editas aquí)     (Carga automáticamente)   (Se actualiza)
└─────────────────────────────────────────────────────────┘
```

**Pasos para modificar algo:**
1. Abre `config.json` en tu editor
2. Busca la sección que quieres cambiar
3. Modifica el valor entre comillas
4. Guarda el archivo
5. Recarga tu página web (Ctrl+F5)

---

## 📋 Secciones de config.json

### 1. METADATA
Datos que aparecen en el navegador y buscadores.

```json
"METADATA": {
    "titulo_pagina": "Tu título aquí",
    "descripcion_seo": "Descripción para Google",
    "autor": "Nombre del autor"
}
```

**Ejemplo rápido:** Cambiar el título de la pestaña del navegador:
```json
"titulo_pagina": "Mazarino - El Mejor Brunch de Bogotá"
```

---

### 2. NAVEGACION
Menú superior de la página.

```json
"NAVEGACION": {
    "logo": {
        "src": "MainLogo.png",          // Ruta de tu logo
        "alt": "Mazarino Logo",         // Texto alternativo
        "texto_marca": "Arte Manual Mazarino"  // Texto junto al logo
    },
    "items_menu": [
        { "texto": "Inicio", "enlace": "#inicio" },
        { "texto": "Nosotros", "enlace": "#nosotros" }
        // ... añadir más items aquí
    ]
}
```

**Añadir un item al menú:**
```json
{ "texto": "Ofertas", "enlace": "#ofertas" }
```

**Cambiar el logo:**
```json
"src": "mi-nuevo-logo.png"
```

---

### 3. HERO
Banner principal de la página (la primera sección que se ve).

```json
"HERO": {
    "slogan_imagen": {
        "src": "SloganMazarino.png",
        "alt": "Cuidamos cada detalle",
        "max_ancho": "350px"
    },
    "titulo_principal": "Refrigerios & Brunch Empresarial",
    "subtitulo": "Soluciones gastronómicas frescas...",
    "boton_1": { "texto": "Ver Menú", "enlace": "#menu" },
    "boton_2": { "texto": "Cotizar Ahora", "enlace": "#contacto" },
    "video": {
        "src": "MainVideo.mp4",
        "mostrar": true    // Cambia a false para ocultar
    }
}
```

**Cambiar foto del slogan:**
```json
"src": "mi-nueva-imagen-slogan.png"
```

**Ocultar el video:**
```json
"mostrar": false
```

---

### 4. NOSOTROS
Sección "Sobre Nosotros".

```json
"NOSOTROS": {
    "titulo_pequeno": "Sobre Nosotros",
    "titulo_grande": "Cuidamos Cada Detalle de tu Evento",
    "parrafo_1": "Primer párrafo...",
    "parrafo_2": "Segundo párrafo...",
    "imagen": {
        "src": "Fotos Editadas Mazarino/1.png",
        "alt": "Refrigerios Mazarino"
    },
    "valores_columna_1": ["Calidad y Frescura", "Atención al Detalle", "Confianza y Puntualidad"],
    "valores_columna_2": ["Variedad de Opciones", "Entregas 365 días", "Pedidos desde 15 unidades"],
    "estadisticas": [
        { "numero": "500+", "descripcion": "Eventos Atendidos" },
        { "numero": "365", "descripcion": "Días de Entrega" }
    ]
}
```

**Cambiar la foto:**
```json
"src": "Fotos Editadas Mazarino/5.png"
```

**Cambiar una estadística:**
```json
{ "numero": "1000+", "descripcion": "Eventos Atendidos" }
```

---

### 5. SERVICIOS
Tarjetas de servicios.

```json
"SERVICIOS": {
    "titulo_pequeno": "Nuestros Servicios",
    "titulo_grande": "Soluciones para Cada Occasión",
    "descripcion": "Descripción general...",
    "servicios": [
        {
            "icono": "fa-cookie-bite",     // Icono de FontAwesome
            "titulo": "Refrigerios Estándar",
            "descripcion": "Descripción del servicio...",
            "enlace_texto": "Ver Opciones",
            "enlace": "#menu"
        }
    ]
}
```

**Añadir un servicio nuevo:** Copia un bloque y pégalo:
```json
{
    "icono": "fa-birthday-cake",
    "titulo": "Pasteles Personalizados",
    "descripcion": "Pasteles artesanales para tus eventos.",
    "enlace_texto": "Ver Opciones",
    "enlace": "#menu"
}
```

**Iconos disponibles:** Visita https://fontawesome.com/icons para ver todos los iconos (usa el nombre como "fa-nombre").

---

### 6. MENÚ / PRODUCTOS ⭐
Aquí gestionas todos los productos, precios y categorías.

```json
"MENU": {
    "titulo_pequeno": "Nuestro Menú",
    "titulo_grande": "Productos y Precios",
    "descripcion": "Descripción general...",
    "categorias": [
        { "id": "all", "texto": "Todos" },
        { "id": "refrigerio", "texto": "Refrigerios" },
        { "id": "estacion", "texto": "Estaciones de Café/Té" }
    ],
    "productos": [
        {
            "categoria": "refrigerio",       // Debe coincidir con un id de categorias
            "etiqueta": "Refrigerio",        // Badge que se muestra en la tarjeta
            "titulo": "Refrigerio Estándar",
            "descripcion": "Descripción del producto...",
            "precio": "$13.900 COP",
            "imagen": "Fotos Editadas Mazarino/2.png"
        }
    ]
}
```

**Cambiar descripción de un refrigerio:**
```json
"descripcion": "Nuevo texto de descripción del producto"
```

**Cambiar foto de un producto:**
```json
"imagen": "Fotos Editadas Mazarino/15.png"
```

**Cambiar precio:**
```json
"precio": "$18.500 COP"
```

**Añadir un producto nuevo:**
```json
{
    "categoria": "refrigerio",
    "etiqueta": "Refrigerio",
    "titulo": "Nuevo Producto",
    "descripcion": "Descripción del nuevo producto.",
    "precio": "$15.000 COP",
    "imagen": "Fotos Editadas Mazarino/14.png"
}
```

**Añadir una categoría nueva:**
1. En `categorias` añade: `{ "id": "mi-nueva", "texto": "Mi Nueva Categoría" }`
2. En `productos` asigna: `"categoria": "mi-nueva"`

---

#### ☕ Estaciones de Café/Té (NUEVA SECCIÓN)

Ya incluí esta categoría en la configuración. Los productos de estación están así:

```json
{
    "categoria": "estacion",
    "etiqueta": "Estación Café/Té",
    "titulo": "Estación de Café Premium",
    "descripcion": "Café de grano colombiano...",
    "precio": "$35.000 COP",
    "imagen": "Fotos Editadas Mazarino/11.png"
}
```

Para modificarlos, busca en `MENU.productos` los items con `"categoria": "estacion"`.

---

### 7. INFO_IMPORTANTE
Información para los clientes (pedido mínimo, entregas, etc.)

```json
"INFO_IMPORTANTE": {
    "titulo_pequeno": "Información Importante",
    "titulo_grande": "Para Tener en Cuenta",
    "items": [
        {
            "icono": "fa-box-open",
            "titulo": "Pedido Mínimo",
            "descripcion": "El pedido mínimo es de 15 unidades..."
        }
    ]
}
```

---

### 8. FUNDADORAS
Sección de las fundadoras del negocio.

```json
"FUNDADORAS": {
    "titulo_pequeno": "Nuestras Fundadoras",
    "titulo_grande": "La Historia Detrás de Mazarino",
    "descripcion": "Subtítulo...",
    "fundadoras": [
        {
            "imagen": "founder1.png",
            "nombre": "Nombre Fundadora 1",
            "cargo": "Cofundadora & CEO",
            "bio": "Biografía de la fundadora..."
        }
    ],
    "mision": {
        "titulo": "Nuestra Misión",
        "texto": "Texto de la misión..."
    }
}
```

**Cambiar foto de fundadora:**
```json
"imagen": "nueva-foto-fundadora.png"
```

**Cambiar nombre:**
```json
"nombre": "María Rodríguez"
```

---

### 9. CONTACTO
Información de contacto y botón de WhatsApp.

```json
"CONTACTO": {
    "titulo_pequeno": "Contáctanos",
    "titulo_grande": "Haz tu Pedido",
    "descripcion": "Subtítulo...",
    "informacion": {
        "telefono": { "label": "Teléfono", "valor": "312 500 2080" },
        "email": { "label": "Correo", "valor": "email@ejemplo.com" },
        "instagram": { "label": "Instagram", "valor": "@mazarino", "enlace": "https://..." },
        "facebook": { "label": "Facebook", "valor": "Mazarino", "enlace": "https://..." }
    },
    "whatsapp": {
        "numero": "573125002080",
        "mensaje_predeterminado": "Hola Mazarino, me interesa..."
    }
}
```

**Cambiar número de WhatsApp:**
```json
"numero": "573001234567"
```

---

### 10. GALERIA
Fotos de la galería.

```json
"GALERIA": {
    "titulo_pequeno": "Nuestra Galería",
    "titulo_grande": "Fotos de Nuestros Productos",
    "fotos": [
        { "src": "Fotos Editadas Mazarino/11.png", "alt": "Descripción" },
        { "src": "Fotos Editadas Mazarino/12.png", "alt": "Descripción" }
    ]
}
```

**Añadir una foto:**
```json
{ "src": "Fotos Editadas Mazarino/18.png", "alt": "Nuevo producto" }
```

**Eliminar una foto:** Borra la línea correspondiente.

---

### 11. FOOTER
Pie de página.

```json
"FOOTER": {
    "logo": { "src": "MainLogo.png", "texto": "Arte Manual Mazarino" },
    "descripcion": "Texto descriptivo...",
    "redes_sociales": {
        "facebook": "https://...",
        "instagram": "https://...",
        "whatsapp": "https://...",
        "email": "mailto:..."
    },
    "enlaces_footer": [...],
    "servicios_footer": [...],
    "boletin": {
        "titulo": "Boletín",
        "descripcion": "Suscríbete...",
        "placeholder": "Tu correo"
    },
    "copyright": "© 2025 Arte Manual Mazarino...",
    "frase_final": "Cuidamos cada detalle ❤️"
}
```

---

### 12. COLORES 🎨
Cambia todos los colores de tu página desde un solo lugar.

```json
"COLORES": {
    "primary_color": "#ad1f4a",      // Color principal (botones, títulos)
    "primary_dark": "#6a0828",       // Color oscuro (hover)
    "primary_light": "#f2c5e0",      // Color claro (fondos suaves)
    "accent_color": "#d43790",       // Color de acento
    "accent_light": "#ec8fd0",       // Acento claro
    "text_dark": "#2d0a18",          // Texto oscuro
    "text_medium": "#6b4e5e",        // Texto medio
    "bg_light": "#fdf2f8",           // Fondos claros
    "bg_dark": "#2d0a18"             // Fondos oscuros (footer)
}
```

**Ejemplo: Cambiar a tonos verdes:**
```json
"COLORES": {
    "primary_color": "#2d6a4f",
    "primary_dark": "#1b4332",
    "primary_light": "#d8f3dc",
    "accent_color": "#40916c",
    "accent_light": "#52b788",
    "text_dark": "#1b4332",
    "text_medium": "#555555",
    "bg_light": "#f0f7f4",
    "bg_dark": "#1b4332"
}
```

**Ejemplo: Cambiar a tonos azules:**
```json
"COLORES": {
    "primary_color": "#1e3a5f",
    "primary_dark": "#0f1f33",
    "primary_light": "#d0e1f0",
    "accent_color": "#2a5f8f",
    "accent_light": "#4a90b8",
    "text_dark": "#0f1f33",
    "text_medium": "#555555",
    "bg_light": "#f0f4f8",
    "bg_dark": "#0f1f33"
}
```

---

## ⚡ Recipes: Cambios Comunes

### Cambiar la foto de un producto
1. Abre `config.json`
2. Busca en `MENU > productos` el producto
3. Cambia `"imagen": "nueva-foto.png"`

### Cambiar un precio
1. Busca en `MENU > productos` el producto
2. Cambia `"precio": "$25.000 COP"`

### Cambiar colores de toda la página
1. Ve a `COLORES`
2. Modifica los códigos hex (formato `#RRGGBB`)
3. Guarda y recarga

### Añadir un producto nuevo
1. En `MENU > productos`, copia un bloque `{...}`
2. Pégalo después del último
3. Modifica título, descripción, precio, imagen, categoría

### Añadir una categoría de productos nueva
1. En `MENU > categorias`, añade: `{ "id": "nueva", "texto": "Nueva Categoría" }`
2. En los productos, usa `"categoria": "nueva"`

### Cambiar datos de contacto
1. Ve a `CONTACTO > informacion`
2. Modifica teléfono, email, redes sociales

### Cambiar nombre o foto de fundadora
1. Ve a `FUNDADORAS > fundadoras`
2. Modifica `"nombre"`, `"imagen"`, `"cargo"`, `"bio"`

---

## ⚠️ Reglas Importantes

1. **Siempre usa comillas dobles** `"` en JSON (no simples `'`)
2. **No añades comas** después del último elemento de un array u objeto
3. **Cierra todas las llaves** `{` con `}` y corchetes `[` con `]`
4. **Los archivos de imagen** deben existir en tu carpeta del proyecto
5. **Los colores** usan formato hexadecimal: `#RRGGBB`
6. **Validar JSON:** Puedes usar https://jsonlint.com/ para verificar que tu config.json es válido

---

## 📁 Estructura de Archivos

```
SSierraAl.github.io/
│
├── config.json              ← EDITA AQUÍ para cambiar todo
├── index.html               ← Estructura (no necesitas editar)
├── GUIA_CONFIGURACION.md    ← Este documento
│
├── css/
│   └── styles.css           ← Estilos (variables de colores aquí también)
│
├── js/
│   ├── script.js            ← Funcionalidad
│   └── config-loader.js     ← Carga config.json (no necesitas editar)
│
├── Fotos Editadas Mazarino/ ← Fotos de productos
│   ├── 1.png
│   ├── 2.png
│   └── ...
│
├── MainLogo.png             ← Logo
├── SloganMazarino.png       ← Imagen del slogan
├── MainVideo.mp4            ← Video principal
├── founder1.png             ← Foto fundadora 1
└── founder2.png             ← Foto fundadora 2
```

---

## 🚀 Desplegar Cambios

Después de editar `config.json`:

**Local (tu computador):**
- Simplemente recarga la página (Ctrl+F5)

**GitHub Pages (online):**
```bash
git add config.json
git commit -m "Actualización de contenido"
git push origin main
```

Los cambios aparecerán en tu página web en ~1-2 minutos.

---

## 💡 Tips

- **Haz backup** de `config.json` antes de cambios grandes
- **Un cambio a la vez:** Modifica una sección, guarda, verifica
- **Usa un editor con soporte JSON:** VS Code valida automáticamente
- **Para colores:** Usa https://www.color-hex.com/ para encontrar códigos