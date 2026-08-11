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

1. **Logo real**: el sitio usa un logo placeholder construido en CSS/SVG (insignia + monograma "FM").
   Cuando subas `fm-icon.png` y `fm-logo-horizontal.png` a `assets/logo/`, buscá los comentarios
   `TODO` en `index.html` (header, hero y footer) e intercambiá el bloque `.logo-badge` por un
   `<img>` apuntando a esos archivos.
2. **Número de WhatsApp**: reemplazá `50600000000` en `index.html` (enlace directo) y en
   `js/main.js` (`WHATSAPP_NUMBER`) por el número real, en formato internacional sin `+` ni espacios.
3. **Correo de contacto**: reemplazá `hola@fmsolutions.cr` en `index.html` y `js/main.js`
   (`CONTACT_EMAIL`) por el correo real.
4. **Imagen Open Graph**: `og:image` apunta a `assets/logo/fm-logo-horizontal.png`; una vez subido
   el archivo, las vistas previas en redes sociales van a mostrarlo automáticamente.
