# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a Capi Netta RP Landing Page! 

## 📋 Proceso de Contribución

### 1. Fork y Clona

```bash
# Fork el repositorio desde GitHub
# Luego clona tu fork
git clone https://github.com/TU_USUARIO/landing-page-capinetta.git
cd landing-page-capinetta
```

### 2. Crea una Rama

```bash
# Crea y cambia a una nueva rama
git checkout -b feature/nombre-del-feature

# O para corrección de bugs
git checkout -b fix/nombre-del-bug
```

### 3. Realiza tus Cambios

- Sigue las guías de estilo del proyecto
- Escribe código limpio y comentado
- Prueba tus cambios localmente

### 4. Commit

Usa mensajes de commit descriptivos con prefijos:

```bash
git commit -m "Add: Nueva funcionalidad de X"
git commit -m "Fix: Corrección del bug en Y"
git commit -m "Update: Mejora en componente Z"
git commit -m "Refactor: Refactorización de módulo W"
git commit -m "Style: Mejoras visuales en sección V"
git commit -m "Docs: Actualización de documentación"
```

### 5. Push

```bash
git push origin feature/nombre-del-feature
```

### 6. Pull Request

1. Ve a tu fork en GitHub
2. Click en "Pull Request"
3. Describe tus cambios detalladamente
4. Espera la revisión del equipo

---

## 🎯 Guía de Commits

### Prefijos Obligatorios

- **`Add:`** Para nuevas funcionalidades o archivos
- **`Fix:`** Para corrección de bugs
- **`Update:`** Para actualizaciones de código existente
- **`Refactor:`** Para refactorización sin cambio de funcionalidad
- **`Style:`** Para cambios visuales (CSS, diseño)
- **`Docs:`** Para cambios en documentación
- **`Test:`** Para agregar o modificar tests
- **`Chore:`** Para tareas de mantenimiento

### Ejemplos de Buenos Commits

```bash
✅ Add: Sección de eventos en página principal
✅ Fix: Error de scroll suave en navegación mobile
✅ Update: Optimización de imágenes en hero section
✅ Style: Mejora de espaciado en footer responsive
✅ Docs: Agregar guía de instalación para Windows
```

### Ejemplos de Malos Commits

```bash
❌ cambios varios
❌ fix
❌ updated files
❌ trabajo del dia
```

---

## 📝 Estándares de Código

### HTML

- ✅ Usar etiquetas semánticas (`<header>`, `<nav>`, `<section>`, `<article>`)
- ✅ Incluir atributos `alt` en todas las imágenes
- ✅ Usar atributos ARIA cuando sea necesario
- ✅ Indentar con 4 espacios
- ✅ Cerrar todas las etiquetas correctamente

```html
<!-- ✅ Bueno -->
<section class="hero" aria-label="Banner principal">
    <img src="logo.png" alt="Logo de Capi Netta RP">
    <h1>Título Principal</h1>
</section>

<!-- ❌ Malo -->
<div class="hero">
    <img src="logo.png">
    <h1>Título Principal</h1>
</div>
```

### CSS

- ✅ Usar variables CSS para colores y valores repetidos
- ✅ Organizar propiedades alfabéticamente
- ✅ Comentar secciones importantes
- ✅ Mobile-first approach
- ✅ Usar BEM o nomenclatura consistente

```css
/* ✅ Bueno */
.hero-section {
    background: var(--bg-dark);
    display: flex;
    padding: var(--section-padding);
}

.hero-section__title {
    color: var(--accent-violet);
    font-family: var(--font-heading);
}

/* ❌ Malo */
.hero {
    background: #050505;
    padding: 80px 0;
    display: flex;
}
```

### JavaScript

- ✅ Usar ES6+ (const, let, arrow functions)
- ✅ Comentar funciones complejas
- ✅ Nombres de variables descriptivos
- ✅ Evitar variables globales innecesarias
- ✅ Usar camelCase para variables y funciones

```javascript
// ✅ Bueno
const initializeMenu = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
};

// ❌ Malo
function menu() {
    var t = document.querySelector('.menu-toggle');
    var n = document.querySelector('.nav-links');
    t.onclick = function() {
        n.classList.toggle('active');
    }
}
```

### EJS

- ✅ Usar partials para componentes reutilizables
- ✅ Pasar datos mediante variables
- ✅ Evitar lógica compleja en templates
- ✅ Comentar includes complejos

```ejs
<!-- ✅ Bueno -->
<%- include('partials/header', { 
    page: 'index',
    title: 'Capi Netta RP'
}) %>

<!-- ❌ Malo -->
<% if (page == 'index') { %>
    <!-- código HTML largo sin incluir partial -->
<% } %>
```

---

## 🐛 Reportar Bugs

### Antes de Reportar

1. ✅ Busca si el bug ya fue reportado
2. ✅ Verifica que estés usando la última versión
3. ✅ Intenta reproducir el bug

### Cómo Reportar

Ve a [Issues](https://github.com/Capinetta-RP/landing-page-capinetta/issues) y crea un nuevo issue con:

**Título**: Descripción breve y clara

**Descripción**:
- **Descripción del problema**: Qué está pasando
- **Comportamiento esperado**: Qué debería pasar
- **Pasos para reproducir**:
  1. Paso 1
  2. Paso 2
  3. Paso 3
- **Screenshots**: Si aplica
- **Entorno**:
  - OS: [Windows 11, macOS, Linux]
  - Navegador: [Chrome 90, Firefox 88]
  - Versión de Node: [18.0.0]

---

## 💡 Sugerir Features

### Template para Sugerencias

**Título**: [Feature] Nombre del feature

**Descripción**:
- **¿Qué quieres agregar?**: Descripción detallada
- **¿Por qué es útil?**: Beneficios para el proyecto
- **¿Cómo debería funcionar?**: Comportamiento esperado
- **Ejemplos**: Links o screenshots de referencia

---

## 🧪 Testing

### Checklist Antes de PR

- [ ] El código funciona correctamente en `localhost:3000`
- [ ] Probado en Chrome, Firefox y Safari
- [ ] Responsive en mobile, tablet y desktop
- [ ] No hay errores en la consola del navegador
- [ ] No hay errores de ESLint (si aplica)
- [ ] Código comentado adecuadamente
- [ ] Actualizada la documentación si es necesario

### Pruebas Manuales

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Probar en navegador
# - Navegación entre páginas
# - Menú responsive en mobile
# - Scroll suave
# - Formularios (si aplica)
# - Lazy loading de imágenes
```

---

## ⏱️ Proceso de Revisión

1. **Envías PR**: El equipo es notificado
2. **Revisión inicial**: 24-48 horas
3. **Feedback**: Si hay cambios solicitados
4. **Aprobación**: Cuando todo esté correcto
5. **Merge**: Tu código se integra al proyecto

---

## 🏆 Contribuidores

¡Gracias a todos los que han contribuido!

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- Aquí se listarán automáticamente los contribuidores -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

---

## 📞 ¿Necesitas Ayuda?

- 💬 **Discord**: [Únete al servidor](https://discord.gg/tpxRFHugX7)
- 📧 **Email**: contacto@capinettarp.com.ar
- 🐙 **GitHub Discussions**: Para preguntas generales

---

[← Volver al README](../README.md)
