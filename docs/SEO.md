# 🌐 SEO y Optimización

## ✅ SEO Implementado

### Meta Tags Completos

Cada página incluye:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Descripción optimizada para SEO">
<meta name="keywords" content="servidor gta v roleplay, fivem roleplay, servidor rp español">
<meta name="author" content="Capi Netta RP Team">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://capinettarp.com/pagina">
```

### Open Graph Protocol

Optimizado para redes sociales (Facebook, LinkedIn):

```html
<meta property="og:type" content="website">
<meta property="og:locale" content="es_ES">
<meta property="og:site_name" content="Capi Netta RP">
<meta property="og:title" content="Título optimizado">
<meta property="og:description" content="Descripción para redes sociales">
<meta property="og:image" content="https://capinettarp.com/assets/logo.png">
<meta property="og:url" content="https://capinettarp.com">
```

### Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@CapiNettaRP">
<meta name="twitter:title" content="Título para Twitter">
<meta name="twitter:description" content="Descripción para Twitter">
<meta name="twitter:image" content="https://capinettarp.com/assets/logo.png">
```

### Schema.org JSON-LD

Datos estructurados para mejorar la presencia en buscadores:

```javascript
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Capi Netta RP",
  "description": "Servidor FiveM de roleplay GTA V",
  "url": "https://capinettarp.com",
  "logo": "https://capinettarp.com/assets/logo.png",
  "sameAs": [
    "https://discord.gg/tpxRFHugX7",
    "https://github.com/Capinetta-RP"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "contacto@capinettarp.com.ar"
  }
}
```

---

## ⚡ Optimización de Performance

### Compresión

- ✅ **Gzip/Brotli**: Todos los assets comprimidos
- ✅ **Minificación**: CSS y JavaScript optimizados
- ✅ **Imágenes**: Comprimidas y optimizadas

### Carga de Recursos

```html
<!-- Preconnect a dominios externos -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Preload de recursos críticos -->
<link rel="preload" href="/css/styles.css" as="style">
<link rel="preload" href="/js/script.js" as="script">

<!-- Lazy loading de fuentes -->
<link rel="preload" 
      href="https://fonts.googleapis.com/css2?family=Orbitron" 
      as="style" 
      onload="this.onload=null;this.rel='stylesheet'">
```

### Lazy Loading de Imágenes

```html
<img src="placeholder.jpg" 
     data-src="imagen-real.jpg" 
     loading="lazy" 
     alt="Descripción">
```

### Critical CSS

- Estilos críticos inline en `<head>`
- Estilos no críticos cargados de forma asíncrona

---

## 📊 Métricas y Monitoreo

### Google Analytics 4

```javascript
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Search Console

1. Verifica la propiedad del sitio
2. Envía el sitemap: `https://capinettarp.com/sitemap.xml`
3. Monitorea:
   - Consultas de búsqueda
   - Impresiones y clics
   - Cobertura de índice
   - Experiencia de página

### Core Web Vitals

Métricas objetivo:

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Herramientas de Auditoría

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)
- Lighthouse (Chrome DevTools)

---

## 📁 Archivos de Control

### sitemap.xml

Ubicación: `/public/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://capinettarp.com.ar/</loc>
        <lastmod>2026-02-02</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://capinettarp.com.ar/como-empezar</loc>
        <lastmod>2026-02-02</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
</urlset>
```

### robots.txt

Ubicación: `/public/robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://capinettarp.com.ar/sitemap.xml
```

### manifest.json (PWA)

Ubicación: `/public/manifest.json`

```json
{
  "name": "Capi Netta RP",
  "short_name": "Capinetta",
  "description": "Servidor FiveM Roleplay",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0b0b0f",
  "theme_color": "#B026FF",
  "icons": [
    {
      "src": "/assets/logo.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

## 🎯 Checklist SEO

### On-Page SEO

- [x] Títulos únicos por página (< 60 caracteres)
- [x] Meta descriptions únicas (< 160 caracteres)
- [x] URLs limpias y descriptivas
- [x] Headings jerárquicos (H1 → H2 → H3)
- [x] Alt text en todas las imágenes
- [x] Enlaces internos relevantes
- [x] Contenido original y valioso

### Technical SEO

- [x] Sitemap XML
- [x] Robots.txt configurado
- [x] URLs canónicas
- [x] HTTPS habilitado
- [x] Responsive design
- [x] Velocidad de carga optimizada
- [x] Schema markup

### Off-Page SEO

- [ ] Backlinks de calidad
- [ ] Presencia en redes sociales
- [ ] Menciones de marca
- [ ] Guest posting
- [ ] Directorio de servidores FiveM

---

## 🔍 Keywords Estratégicas

### Primarias

- servidor gta v roleplay
- fivem roleplay español
- servidor rp latino
- gta v roleplay latam

### Secundarias

- servidor roleplay serio
- fivem server español
- gta 5 roleplay
- servidor rp españa

### Long-tail

- servidor gta v roleplay latinoamérica 2026
- mejor servidor fivem roleplay español
- como entrar servidor roleplay gta v

---

## 📈 Mejora Continua

### Tareas Mensuales

1. Revisar Google Search Console
2. Analizar Google Analytics
3. Actualizar sitemap si hay cambios
4. Auditoría de enlaces rotos
5. Revisar velocidad de carga

### Tareas Trimestrales

1. Auditoría SEO completa
2. Actualizar contenido obsoleto
3. Revisar competencia
4. Optimizar imágenes antiguas
5. Revisar y actualizar keywords

---

[← Volver al README](../README.md)
