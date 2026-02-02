# 🎮 Capi Netta RP - Landing Page

<div align="center">
  <img src="https://raw.githubusercontent.com/Capinetta-RP/capinetta-discord-bot/main/assets/logo.png" alt="Capi Netta RP Logo" width="200">
  
  ### 🌐 Landing Page Oficial del Servidor FiveM Roleplay
  
  [![Discord](https://img.shields.io/badge/Discord-Únete-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/tpxRFHugX7)
  [![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
  [![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
  [![Express](https://img.shields.io/badge/Express-4.18-black?style=for-the-badge&logo=express)](https://expressjs.com/)
  
  [🌐 Website](https://capinettarp.com.ar) • [💬 Discord](https://discord.gg/tpxRFHugX7) • [📚 Docs](https://github.com/Capinetta-RP)
</div>

---

## 📋 Índice

- [📋 Descripción](#-descripción)
- [✨ Características Principales](#-características-principales)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [📦 Requisitos Previos](#-requisitos-previos)
- [🚀 Instalación y Configuración](#-instalación-y-configuración)
- [🎯 Uso y Navegación](#-uso-y-navegación)
- [📂 Estructura del Proyecto](#-estructura-del-proyecto)
- [📜 Scripts Disponibles](#-scripts-disponibles)
- [🎨 Guía de Diseño](#-guía-de-diseño)
- [📚 Documentación Adicional](#-documentación-adicional)  - [🔧 Configuración Avanzada](docs/CONFIGURACION.md)
  - [🚀 Guía de Despliegue](docs/DESPLIEGUE.md)
  - [🤝 Guía de Contribución](docs/CONTRIBUIR.md)
  - [🌐 SEO y Optimización](docs/SEO.md)
  - [🔒 Seguridad](docs/SEGURIDAD.md)- [👥 Equipo de Desarrollo](#-equipo-de-desarrollo)
- [🔗 Enlaces Importantes](#-enlaces-importantes)
- [📊 Estadísticas del Proyecto](#-estadísticas-del-proyecto)
- [📝 Licencia](#-licencia)
- [🙏 Agradecimientos](#-agradecimientos)

---

## 📋 Descripción

Landing page moderna, responsive y optimizada para SEO del servidor **Capi Netta RP**, un proyecto de roleplay en GTA V (FiveM) enfocado en la comunidad hispana de **Latinoamérica y España**.

Con un diseño cyberpunk único, efectos visuales modernos y una experiencia de usuario fluida, esta web sirve como punto de entrada principal para nuevos jugadores, presentando toda la información del servidor, normativas, staff y guías de inicio.

### 🎯 Objetivo del Proyecto

Proporcionar una plataforma web profesional que:
- Atraiga nuevos jugadores al servidor
- Informe sobre las normativas y mecánicas del servidor
- Presente al equipo de staff de forma visual
- Facilite el proceso de registro y primeros pasos
- Mejore el posicionamiento SEO del servidor

### ✨ Características Principales

- 🎨 **Diseño Cyberpunk Moderno**: Estética futurista con gradientes, efectos de glassmorphism y animaciones suaves
- 📱 **Totalmente Responsive**: Optimizado para desktop, tablet y dispositivos móviles con diseño adaptativo
- ⚡ **SEO Optimizado**: Meta tags completos, Schema.org, sitemap.xml, robots.txt y Open Graph
- 🎯 **Navegación Intuitiva**: Menú hamburguesa responsive, scroll suave y navegación por anclas
- 🔄 **Sistema de Plantillas EJS**: Componentes reutilizables y contenido dinámico
- 🎭 **Sección de Staff Dinámica**: Avatares extraídos desde Discord API en tiempo real
- 📜 **Páginas de Normativas**: Reglas detalladas para Discord y GTA con diseño claro
- ❓ **FAQ Interactivo**: Sección de preguntas frecuentes con acordeón
- 🛒 **Tienda Integrada**: Preparado para integración con sistema de tienda
- 🚀 **Optimización de Performance**: Compresión gzip, lazy loading de imágenes, fuentes optimizadas
- 🔒 **Seguridad**: Headers de seguridad configurados, protección contra ataques comunes
- 📊 **Analytics Ready**: Preparado para Google Analytics y métricas

---

## 🛠️ Stack Tecnológico

### Backend
- **Runtime**: Node.js v18+
- **Framework**: Express.js 4.18
- **Template Engine**: EJS (Embedded JavaScript)
- **Middleware**: Compression (gzip), dotenv

### Frontend
- **HTML5**: Semántico y accesible
- **CSS3**: Variables CSS, Flexbox, Grid, animaciones
- **JavaScript**: Vanilla JS (sin frameworks), ES6+

### Fuentes & Recursos
- **Tipografías**: Google Fonts (Orbitron, Rajdhani)
- **Iconos**: Font Awesome 6.4
- **API Externa**: Discord Bot API para avatares

### DevOps & Herramientas
- **Version Control**: Git & GitHub
- **Development**: Nodemon para hot-reload
- **Package Manager**: npm
- **Environment**: dotenv para variables de entorno

---

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **[Node.js](https://nodejs.org/)** v18.0.0 o superior
- **[npm](https://www.npmjs.com/)** v9.0.0 o superior (incluido con Node.js)
- **Git** para clonar el repositorio
- Un editor de código (recomendado: [VS Code](https://code.visualstudio.com/))
- **(Opcional)** Token de bot de Discord para avatares de staff dinámicos

---

## 🚀 Instalación y Configuración

### 1️⃣ Clonar el Repositorio

```bash
git clone https://github.com/Capinetta-RP/landing-page-capinetta.git
cd landing-page-capinetta
```

### 2️⃣ Instalar Dependencias

```bash
npm install
```

Las dependencias instaladas incluyen:
- `express` - Framework web
- `ejs` - Motor de plantillas
- `dotenv` - Gestión de variables de entorno
- `compression` - Compresión gzip
- `nodemon` - Auto-reload en desarrollo (dev dependency)

### 3️⃣ Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```bash
cp .env.example .env
```

Configura las siguientes variables:

```env
# Puerto del servidor (por defecto 3000)
PORT=3000

# Token de Discord Bot (opcional - para avatares dinámicos de staff)
DISCORD_BOT_TOKEN=tu_token_aqui

# Entorno de ejecución
NODE_ENV=development
```

> **💡 Nota sobre Discord Bot Token:**  
> - Si no configuras el token, los avatares de staff mostrarán placeholders genéricos
> - Para obtener un token: [Discord Developer Portal](https://discord.com/developers/applications)
> - El token debe tener permisos básicos de lectura

### 4️⃣ Iniciar el Servidor

**Modo Desarrollo** (con auto-reload):
```bash
npm run dev
```

**Modo Producción**:
```bash
npm start
```

### 5️⃣ Acceder a la Aplicación

Abre tu navegador en: **http://localhost:3000**

---

## 🎯 Uso y Navegación

### Páginas Disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal con hero, info, FAQ y staff |
| `/como-empezar` | Guía paso a paso para nuevos jugadores |
| `/normativas-discord` | Reglas y normativas del servidor de Discord |
| `/normativas-gta` | Reglas de roleplay del servidor GTA V |

### Componentes Principales

- **Header**: Navegación fija con menú responsive
- **Hero**: Banner principal con llamada a la acción
- **Info**: Sección informativa sobre el servidor
- **FAQ**: Preguntas frecuentes con acordeón interactivo
- **Staff**: Equipo administrativo con avatares de Discord
- **Footer**: Enlaces sociales, información legal y copyright

---

## 📂 Estructura del Proyecto

```
landing-page-capinetta/
│
├── 📁 public/                      # Archivos estáticos públicos
│   ├── 📁 assets/                  # Recursos multimedia
│   │   ├── logo.png                # Logo principal del servidor
│   │   ├── logo-favicon.png        # Favicon optimizado
│   │   └── hero-bg.png             # Imagen de fondo del hero
│   ├── 📁 css/
│   │   └── styles.css              # Estilos CSS principales (2100+ líneas)
│   ├── 📁 js/
│   │   └── script.js               # JavaScript del cliente
│   ├── manifest.json               # PWA manifest
│   ├── sitemap.xml                 # Mapa del sitio para SEO
│   ├── robots.txt                  # Directivas para crawlers
│   └── favicon.ico                 # Favicon del sitio
│
├── 📁 views/                       # Plantillas EJS
│   ├── index.ejs                   # Página principal (home)
│   ├── como-empezar.ejs            # Guía de inicio para nuevos
│   ├── normativas-discord.ejs      # Reglas de Discord
│   ├── normativas-gta.ejs          # Reglas de GTA RP
│   ├── 404.ejs                     # Página de error 404
│   ├── 500.ejs                     # Página de error 500
│   └── 📁 partials/                # Componentes reutilizables
│       ├── header.ejs              # Cabecera y navegación
│       ├── footer.ejs              # Pie de página
│       ├── info.ejs                # Sección de información
│       ├── staff.ejs               # Sección del staff
│       └── faq.ejs                 # Sección de preguntas frecuentes
│
├── server.js                       # Servidor Express principal
├── package.json                    # Dependencias y scripts
├── package-lock.json               # Lock de dependencias
├── .env.example                    # Ejemplo de variables de entorno
├── .gitignore                      # Archivos ignorados por Git
├── LICENSE                         # Licencia MIT
└── README.md                       # Documentación (este archivo)
```

### 📝 Descripción de Archivos Clave

- **server.js**: Configuración de Express, rutas, middlewares y manejo de errores
- **styles.css**: Estilos con variables CSS, responsive design y animaciones
- **script.js**: Interactividad del cliente (menú mobile, scroll, lazy loading)
- **partials/**: Componentes modulares que se incluyen en las páginas principales

---

## 📜 Scripts Disponibles

| Comando | Descripción | Uso |
|---------|-------------|-----|
| `npm start` | Inicia el servidor en modo producción | Deploy y producción |
| `npm run dev` | Inicia el servidor con nodemon (recarga automática) | Desarrollo local |

### Ejemplos de Uso

```bash
# Desarrollo local con auto-reload
npm run dev

# Producción (sin auto-reload)
npm start

# Instalar dependencias
npm install

# Actualizar dependencias
npm update
```

---

## 🎨 Guía de Diseño

### 🎨 Paleta de Colores

```css
/* Colores Principales */
--bg-dark: #050505         /* Fondo oscuro principal */
--bg-darker: #020202       /* Fondo más oscuro */
--text-main: #ffffff       /* Texto principal */
--text-muted: #e0e5eb      /* Texto secundario */

/* Acentos Cyberpunk */
--accent-violet: #B026FF   /* Violeta brillante (primario) */
--accent-cyan: #00E5FF     /* Cyan eléctrico (secundario) */
--accent-lime: #39FF14     /* Lima neón (terciario) */
--accent-amber: #ffb347    /* Ámbar cálido (destacados) */

/* Efectos de Vidrio */
--glass-bg: rgba(20, 20, 20, 0.7)
--glass-border: rgba(255, 255, 255, 0.15)
```

### 📐 Responsive Breakpoints

| Dispositivo | Ancho | Características |
|-------------|-------|-----------------|
| **Mobile S** | < 480px | Menú hamburguesa, layout vertical, logo centrado |
| **Mobile L / Tablet** | 480px - 768px | Navegación adaptada, grid reducido |
| **Desktop** | > 768px | Layout completo, navegación horizontal |

### 🔤 Tipografía

- **Headings (Títulos)**: 
  - Familia: `Orbitron` (Google Fonts)
  - Pesos: 400, 700, 900
  - Uso: Títulos, botones, navegación
  
- **Body (Cuerpo)**:
  - Familia: `Rajdhani` (Google Fonts)
  - Pesos: 300, 500, 700
  - Uso: Texto general, párrafos, descripciones

### ✨ Efectos Visuales

- **Glassmorphism**: Fondos con blur y transparencia
- **Gradientes**: Transiciones de color en títulos y botones
- **Sombras**: Box-shadows con glow effects
- **Animaciones**: Transiciones suaves (0.3s - 0.4s ease)
- **Clip-path**: Formas geométricas en botones y tarjetas

---

## � Documentación Adicional

Para información más detallada, consulta la documentación en la carpeta `/docs`:

- **[📋 Configuración Avanzada](docs/CONFIGURACION.md)** - Discord Bot, variables de entorno y configuración detallada
- **[🚀 Guía de Despliegue](docs/DESPLIEGUE.md)** - Vercel, Railway, Render, VPS y configuración de producción
- **[🤝 Guía de Contribución](docs/CONTRIBUIR.md)** - Cómo contribuir al proyecto, estándares de código y proceso
- **[🌐 SEO y Optimización](docs/SEO.md)** - Estrategias SEO, métricas y optimización de performance
- **[🔒 Seguridad](docs/SEGURIDAD.md)** - Headers de seguridad, buenas prácticas y protección
- **[📝 Sistema de Logging](docs/LOGGING.md)** - Winston, niveles de log y monitoreo
- **[🔍 Google Search Console](docs/SEARCH-CONSOLE.md)** - Solución de problemas de indexación y SEO
---

## 👥 Equipo de Desarrollo

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/Fabiantullo">
          <img src="https://github.com/Fabiantullo.png" width="100" height="100" style="border-radius: 50%;" alt="Fabiantullo"><br>
          <b>Fabiantullo</b>
        </a>
        <br>
        <sub>Lead Developer</sub>
      </td>
      <td align="center">
        <a href="https://github.com/lolodevhub">
          <img src="https://github.com/lolodevhub.png" width="100" height="100" style="border-radius: 50%;" alt="lolodevhub"><br>
          <b>lolodevhub</b>
        </a>
        <br>
        <sub>Developer</sub>
      </td>
    </tr>
  </table>
</div>

---

## 🔗 Enlaces Importantes

### 🌐 Web & Redes

| Plataforma | Enlace |
|------------|--------|
| 🌐 **Website** | [capinettarp.com.ar](https://capinettarp.com.ar) |
| 💬 **Discord** | [discord.gg/tpxRFHugX7](https://discord.gg/tpxRFHugX7) |
| 🐙 **GitHub Org** | [github.com/Capinetta-RP](https://github.com/Capinetta-RP) |
| 📧 **Email General** | contacto@capinettarp.com.ar |
| 🆘 **Email Soporte** | soporte@capinettarp.com.ar |

### 📦 Repositorios Relacionados

- [capinetta-discord-bot](https://github.com/Capinetta-RP/capinetta-discord-bot) - Bot de Discord del servidor
- [capinetta-resources](https://github.com/Capinetta-RP/capinetta-resources) - Recursos del servidor FiveM
- [capinetta-docs](https://github.com/Capinetta-RP/capinetta-docs) - Documentación oficial

---

## 📊 Estadísticas del Proyecto

![GitHub repo size](https://img.shields.io/github/repo-size/Capinetta-RP/landing-page-capinetta)
![GitHub contributors](https://img.shields.io/github/contributors/Capinetta-RP/landing-page-capinetta)
![GitHub stars](https://img.shields.io/github/stars/Capinetta-RP/landing-page-capinetta)
![GitHub forks](https://img.shields.io/github/forks/Capinetta-RP/landing-page-capinetta)
![GitHub issues](https://img.shields.io/github/issues/Capinetta-RP/landing-page-capinetta)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Capinetta-RP/landing-page-capinetta)
![GitHub last commit](https://img.shields.io/github/last-commit/Capinetta-RP/landing-page-capinetta)

---

## 📝 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

Queremos agradecer a:

- 🎮 **Comunidad de Capi Netta RP** por su apoyo constante
- 💻 **Colaboradores** que han contribuido al proyecto
- 🎨 **Diseñadores** por la inspiración en diseño cyberpunk
- 📚 **Documentación de Express.js y EJS** por las guías
- 🌐 **Discord** por la API de bots
- ☕ **Café** por las largas noches de código

---

<div align="center">
  
  ### ⭐ Si te gusta este proyecto, ¡dale una estrella!
  
  <br>
  
  <img src="https://raw.githubusercontent.com/Capinetta-RP/capinetta-discord-bot/main/assets/logo.png" alt="Capi Netta RP" width="80">
  
  **Hecho con ❤️ por el equipo de Capi Netta RP**
  
  <br>
  
  © 2026 Capi Netta RP. Todos los derechos reservados.
  
  <br><br>
  
  [![Discord](https://img.shields.io/discord/YOUR_DISCORD_ID?color=7289DA&label=Discord&logo=discord&logoColor=white)](https://discord.gg/tpxRFHugX7)
  [![Website](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Fcapinettarp.com.ar)](https://capinettarp.com.ar)
  
</div>
