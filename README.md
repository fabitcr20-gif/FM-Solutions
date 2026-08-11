# FM Solutions — Landing page

Sitio estático de una sola página. HTML, CSS y JavaScript vanilla, sin build ni dependencias.

## Estructura

```
index.html
css/styles.css
js/main.js
assets/logo/fm-logo-horizontal.png   ← logo completo (header, footer, Open Graph)
assets/logo/fm-icon.png              ← insignia sola (decoración del hero)
assets/favicon/favicon-32.png
assets/favicon/favicon-64.png
assets/favicon/favicon-180.png       ← apple-touch-icon
```

Los PNG de `assets/logo/` son el logo real de la marca, recortados a su contenido
(canal alfa transparente). Los favicons se generaron a partir de `fm-icon.png`.

## Cómo verlo

Abrí `index.html` directamente en el navegador, o serví la carpeta con cualquier servidor estático
(por ejemplo `npx serve .`).

## Datos de contacto

WhatsApp `50686582399` y correo `fabomoracr@icloud.com` ya están cargados en `index.html`
(enlaces de contacto y footer) y en `js/main.js` (formulario).
