# FM Solutions — Landing page

Sitio estático de una sola página. HTML, CSS y JavaScript vanilla, sin build ni dependencias.

## Estructura

```
index.html
css/styles.css
js/main.js
assets/logo/           ← subí acá fm-icon.png y fm-logo-horizontal.png
assets/favicon/favicon.svg
```

## Cómo verlo

Abrí `index.html` directamente en el navegador, o serví la carpeta con cualquier servidor estático
(por ejemplo `npx serve .`).

## Pendientes antes de publicar

1. **Logo real**: el sitio usa un logo placeholder construido en CSS/SVG (insignia + monograma "FM",
   colores y tipografía ya alineados al logo real). Cuando el archivo `fm-icon.png` y/o
   `fm-logo-horizontal.png` esté en `assets/logo/`, buscá los comentarios `TODO` en `index.html`
   (header, hero y footer) e intercambiá el bloque `.logo-badge` por un `<img>` apuntando a esos
   archivos.
2. **Imagen Open Graph**: `og:image` apunta a `assets/logo/fm-logo-horizontal.png`; una vez subido
   el archivo, las vistas previas en redes sociales van a mostrarlo automáticamente.

Datos de contacto (WhatsApp `50686582399`, correo `fabomoracr@icloud.com`) ya están cargados en
`index.html` y `js/main.js`.
