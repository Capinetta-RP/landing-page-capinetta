require('dotenv').config();
const express = require('express');
const path = require('path');
const compression = require('compression');
const logger = require('./utils/logger');

const app = express();
const publicDir = path.join(__dirname, 'public');

// Configurar compresión Gzip/Brotli
app.use(compression({
    filter: (req, res) => {
        if (req.headers['x-no-compression']) {
            return false;
        }
        return compression.filter(req, res);
    },
    level: 6 // Balance entre velocidad y compresión
}));

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurar headers de seguridad y cache
app.use((req, res, next) => {
    // Cache para assets estáticos
    if (req.url.match(/\.(css|js)$/)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable'); // 1 año para CSS/JS
    } else if (req.url.match(/\.(png|jpg|jpeg|gif|svg|webp|ico)$/)) {
        res.setHeader('Cache-Control', 'public, max-age=2592000'); // 30 días para imágenes
    } else if (req.url.match(/\.(woff|woff2|ttf|eot)$/)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable'); // 1 año para fuentes
    } else if (req.url === '/sitemap.xml' || req.url === '/robots.txt') {
        res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 día para sitemap/robots
    } else {
        res.setHeader('Cache-Control', 'public, max-age=3600'); // 1 hora para páginas HTML
    }
    // Seguridad
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
    res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' cdnjs.cloudflare.com fonts.googleapis.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com cdnjs.cloudflare.com; font-src 'self' fonts.gstatic.com cdnjs.cloudflare.com; img-src 'self' data: https:; connect-src 'self' discord.com cdn.discordapp.com fonts.googleapis.com; frame-ancestors 'none'");
    next();
});

app.use(express.static(publicDir));

// Middleware para eliminar trailing slashes (evita contenido duplicado)
app.use((req, res, next) => {
    if (req.path !== '/' && req.path.endsWith('/')) {
        const query = req.url.slice(req.path.length);
        const safePath = req.path.slice(0, -1).replace(/\/+/g, '/');
        res.redirect(301, safePath + query);
    } else {
        next();
    }
});

// Middleware para forzar lowercase en URLs (evita duplicados por mayúsculas)
app.use((req, res, next) => {
    if (req.path !== req.path.toLowerCase()) {
        res.redirect(301, req.path.toLowerCase() + req.url.slice(req.path.length));
    } else {
        next();
    }
});

// Ruta específica para favicon
app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(publicDir, 'assets', 'logo-favicon.png'));
});

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Capi Netta RP | Servidor GTA V Roleplay Argentina',
        description: 'Servidor GTA V roleplay en español con rol serio y economía balanceada. Abierto para jugadores de Latinoamérica y España en FiveM.',
        ogTitle: 'Capi Netta RP | Servidor FiveM Roleplay Argentina',
        ogDescription: 'Servidor de roleplay GTA V en desarrollo. Rol inmersivo, economía justa y comunidad activa en FiveM.',
        url: '/',
        headerClass: '',
        page: 'index'
    });
});

app.get('/normativas-discord', (req, res) => {
    res.render('normativas-discord', {
        title: 'Normativas Discord | Capi Netta RP',
        description: 'Normativa Discord de Capi Netta RP: reglas de convivencia y comportamiento en nuestra comunidad.',
        ogTitle: 'Normativas Discord | Capi Netta RP',
        ogDescription: 'Reglas oficiales para la comunidad de Discord de Capi Netta RP.',
        url: '/normativas-discord',
        headerClass: 'scrolled',
        page: 'normativas-discord'
    });
});

app.get('/normativas-gta', (req, res) => {
    res.render('normativas-gta', {
        title: 'Normativas GTA V | Capi Netta RP',
        description: 'Normativa GTA V de Capi Netta RP: reglas de roleplay, CK, PK, zonas seguras y conducta en ciudad.',
        ogTitle: 'Normativas GTA V | Capi Netta RP',
        ogDescription: 'Reglas completas de roleplay para Capi Netta RP.',
        url: '/normativas-gta',
        headerClass: 'scrolled',
        page: 'normativas-gta'
    });
});

app.get('/como-empezar', (req, res) => {
    res.render('como-empezar', {
        title: 'Cómo Empezar - Capi Netta RP',
        description: 'Guía completa para nuevos jugadores de Capi Netta RP. Aprende cómo unirte, hacer la whitelist y comenzar tu aventura en nuestro servidor de GTA V roleplay.',
        ogTitle: 'Cómo Empezar en Capi Netta RP',
        ogDescription: 'Paso a paso para nuevos jugadores. Todo lo que necesitas saber antes de empezar.',
        url: '/como-empezar',
        headerClass: 'scrolled',
        page: 'como-empezar'
    });
});

// API endpoint para obtener avatares de Discord usando bot token
app.get('/api/discord/avatar/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const botToken = process.env.DISCORD_BOT_TOKEN;
        
        if (!botToken) {
            return res.json({ avatarUrl: '/assets/default-avatar.png' });
        }

        const response = await fetch(`https://discord.com/api/v10/users/${userId}`, {
            headers: {
                'Authorization': `Bot ${botToken}`
            }
        });

        if (!response.ok) {
            return res.json({ avatarUrl: '/assets/default-avatar.png' });
        }

        const userData = await response.json();
        
        if (userData.avatar) {
            const avatarUrl = `https://cdn.discordapp.com/avatars/${userId}/${userData.avatar}.png?size=256`;
            res.json({ avatarUrl });
        } else {
            // Usuario no tiene avatar personalizado, usa default de Discord
            const defaultAvatar = parseInt(userData.discriminator) % 5;
            res.json({ avatarUrl: `https://cdn.discordapp.com/embed/avatars/${defaultAvatar}.png` });
        }
    } catch (error) {
        logger.error('Error fetching Discord avatar:', { error: error.message, userId: req.params.userId });
        res.json({ avatarUrl: '/assets/default-avatar.png' });
    }
});

// Rutas de error
app.use((req, res) => {
    res.status(404).render('404', { 
        title: 'Página no encontrada - Capi Netta RP',
        description: 'La página que buscas no existe. Vuelve al inicio para explorar nuestro servidor de GTA V roleplay.',
        ogTitle: 'Página no encontrada - Capi Netta RP',
        ogDescription: 'La página que buscas no existe en Capi Netta RP.',
        url: req.originalUrl,
        headerClass: '',
        page: '404'
    });
});

app.use((err, req, res, next) => {
    logger.error('Error interno:', { error: err.message, stack: err.stack, url: req.originalUrl });
    res.status(500).render('500', { 
        title: 'Error del servidor - Capi Netta RP',
        description: 'Ocurrió un error en el servidor. Estamos trabajando para solucionarlo.',
        ogTitle: 'Error del servidor - Capi Netta RP',
        ogDescription: 'Ocurrió un error temporal en Capi Netta RP.',
        url: req.originalUrl,
        headerClass: '',
        page: '500'
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`Server running at http://localhost:${PORT}`);
    logger.info(`Environment: ${process.env.NODE_ENV || 'development'}`);
    logger.info('Press Ctrl+C to stop the server');
});
