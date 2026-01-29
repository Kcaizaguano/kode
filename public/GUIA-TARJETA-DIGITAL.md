# 📇 PLANTILLA DE TARJETA DIGITAL - GUÍA DE USO

## 📁 Archivos de la Plantilla

- `business-card.css` - Estilos de la tarjeta (NO modificar)
- `business-card.js` - Funcionalidad del QR (modificar URL aquí)
- `presentacion.html` - Ejemplo KODE
- `ejemplo-tarjeta.html` - Plantilla base para copiar
- `tarjeta-url-personalizada.html` - Ejemplo con URL personalizada en QR

---

## 🎨 CÓMO CREAR UNA NUEVA TARJETA

### Paso 1: Duplicar la plantilla
```
Copia: ejemplo-tarjeta.html
Renombra: mi-nueva-tarjeta.html
```

### Paso 2: Personalizar COLORES
Edita las variables CSS en el `<style>` del HTML:

```css
:root {
    --card-primary: #FF6B6B;        /* Color principal */
    --card-secondary: #FFD93D;      /* Color secundario */
    --card-bg-dark: #2C3E50;        /* Fondo oscuro */
    --card-bg-medium: #34495E;      /* Fondo medio */
    --card-bg-light: #455A64;       /* Fondo claro */
}
```

### Paso 3: Cambiar INFORMACIÓN
Edita el contenido HTML:

```html
<!-- Logo -->
<img src="images/tu-logo.png" alt="Tu Logo">

<!-- Nombre de empresa -->
<h1 class="company-name">TU EMPRESA</h1>
<p class="tagline">Tu Slogan</p>

<!-- Contacto -->
<div class="contact-text">+593 999 999 999</div>
<div class="contact-text">tu@email.com</div>
<div class="contact-text">www.tuweb.com</div>

<!-- Redes sociales -->
<a href="TU_ENLACE" target="_blank" class="social-btn">
```

---

## 📲 CONFIGURAR URL DEL CÓDIGO QR

### Opción 1: Usar archivo business-card.js (Recomendado)

Edita `business-card.js` en la línea 2:

```javascript
// Cambia esta línea:
const QR_URL = window.location.href; // URL actual

// Por tu URL personalizada:
const QR_URL = "https://tu-url-aqui.com";
```

### Opción 2: Script inline en el HTML

Si quieres URLs diferentes por página, usa el ejemplo `tarjeta-url-personalizada.html`:

```html
<script>
    // Configura tu URL aquí
    const QR_URL = "https://www.ejemplo.com/mi-enlace";
    
    // Resto del código...
</script>
```

### Ejemplos de URLs para QR:

```javascript
// URL de tu página
const QR_URL = "https://kode-sitios-web.web.app/presentacion";

// WhatsApp directo
const QR_URL = "https://api.whatsapp.com/send/?phone=593997251729";

// Imagen o archivo
const QR_URL = "https://ejemplo.com/mi-imagen.png";

// Google Maps
const QR_URL = "https://maps.google.com/?q=tu+ubicacion";

// vCard (tarjeta de contacto)
const QR_URL = "BEGIN:VCARD\nVERSION:3.0\nFN:Tu Nombre\nTEL:+593999999999\nEND:VCARD";
```

---

## 🎨 PALETAS DE COLORES SUGERIDAS

### Azul Profesional (KODE - Original)
```css
--card-primary: #74C0FC;
--card-secondary: #5DEBD7;
--card-bg-dark: #070a2a;
--card-bg-medium: #1a1f3a;
--card-bg-light: #2d2e4a;
```

### Rojo Energético
```css
--card-primary: #FF6B6B;
--card-secondary: #FFD93D;
--card-bg-dark: #2C3E50;
--card-bg-medium: #34495E;
--card-bg-light: #455A64;
```

### Verde Natural
```css
--card-primary: #51CF66;
--card-secondary: #94D82D;
--card-bg-dark: #1A3A2A;
--card-bg-medium: #2D5A3D;
--card-bg-light: #3D6A4D;
```

### Morado Creativo
```css
--card-primary: #9775FA;
--card-secondary: #CC5DE8;
--card-bg-dark: #1A1B3E;
--card-bg-medium: #2D2E5A;
--card-bg-light: #3D3E6A;
```

### Naranja Vibrante
```css
--card-primary: #FF922B;
--card-secondary: #FCC419;
--card-bg-dark: #3A2A1A;
--card-bg-medium: #5A3D2D;
--card-bg-light: #6A4D3D;
```

---

## 🔧 PERSONALIZACIÓN AVANZADA

### Cambiar tamaño de la tarjeta
```css
:root {
    --card-max-width: 500px;  /* Ancho máximo */
    --card-padding: 60px 50px; /* Espaciado interno */
}
```

### Cambiar bordes
```css
:root {
    --card-border-radius: 30px; /* Redondez de esquinas */
}
```

---

## 📱 ICONOS DE REDES SOCIALES

Iconos disponibles (Font Awesome):
- WhatsApp: `fa-brands fa-whatsapp`
- Facebook: `fa-brands fa-facebook-f`
- Instagram: `fa-brands fa-instagram`
- LinkedIn: `fa-brands fa-linkedin-in`
- Twitter/X: `fa-brands fa-x-twitter`
- TikTok: `fa-brands fa-tiktok`
- YouTube: `fa-brands fa-youtube`
- Email: `fa-solid fa-envelope`
- Sitio Web: `fa-solid fa-link`

---

## 🚀 DESPLEGAR

1. Guarda tu archivo HTML en la carpeta `public/`
2. Ejecuta: `firebase deploy`
3. Accede: `tudominio.com/tu-archivo.html`

---

## ✅ CHECKLIST DE PERSONALIZACIÓN

- [ ] Cambiar colores en variables CSS
- [ ] Actualizar logo de empresa
- [ ] Modificar nombre y slogan
- [ ] Actualizar teléfono
- [ ] Actualizar email
- [ ] Actualizar sitio web
- [ ] Actualizar ubicación
- [ ] Configurar enlaces de redes sociales
- [ ] Probar generador de QR
- [ ] Verificar responsive en móvil

---

## 💡 TIPS

1. **Contraste**: Asegúrate que los colores tengan buen contraste
2. **Logo**: Usa imágenes PNG con fondo transparente
3. **QR**: El código QR se genera automáticamente con la URL actual
4. **Responsive**: La tarjeta se adapta automáticamente a móviles

---

## 🆘 SOPORTE

¿Problemas? Verifica:
- Que `business-card.css` y `business-card.js` estén en la misma carpeta
- Que las rutas de imágenes sean correctas
- Que los enlaces de redes sociales tengan `https://`
