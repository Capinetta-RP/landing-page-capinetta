# 🔒 Guía de Seguridad

## Headers de Seguridad

### Headers Implementados

```javascript
// Headers de seguridad configurados en Express
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    next();
});
```

### Descripción de Headers

| Header | Función | Valor |
|--------|---------|-------|
| `X-Content-Type-Options` | Previene MIME type sniffing | `nosniff` |
| `X-Frame-Options` | Protege contra clickjacking | `SAMEORIGIN` |
| `X-XSS-Protection` | Filtro XSS del navegador | `1; mode=block` |
| `Strict-Transport-Security` | Fuerza HTTPS | `max-age=31536000` |

---

## Buenas Prácticas

### Variables de Entorno

✅ **HACER**:
```bash
# Usar archivo .env
PORT=3000
DISCORD_BOT_TOKEN=secret_token_here
```

❌ **NO HACER**:
```javascript
// Nunca hardcodear secrets en el código
const token = "MTQ2MTgxOTQzOTI3OTI0MzMwNA.GeFfOw.token";
```

### .gitignore

Asegúrate de que `.gitignore` incluya:

```gitignore
# Variables de entorno
.env
.env.local
.env.production

# Dependencias
node_modules/

# Logs
*.log
npm-debug.log*

# OS
.DS_Store
Thumbs.db
```

---

## Gestión de Dependencias

### Actualizar Dependencias

```bash
# Ver dependencias desactualizadas
npm outdated

# Actualizar a versiones compatibles (respeta semver)
npm update

# Auditoría de seguridad
npm audit

# Corregir vulnerabilidades automáticamente
npm audit fix

# Forzar corrección (puede romper compatibilidad)
npm audit fix --force
```

### Revisar Dependencias

```bash
# Ver árbol de dependencias
npm list

# Ver solo dependencias de producción
npm list --prod

# Verificar licencias
npm list --json | grep license
```

---

## Validación de Inputs

### Lado del Servidor

```javascript
// Ejemplo: Validar email
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// Ejemplo: Sanitizar HTML
const sanitizeInput = (input) => {
    return input
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
};
```

### Prevención de Inyecciones

```javascript
// ✅ Bueno: Usar plantillas EJS (auto-escapa)
<p><%= userInput %></p>

// ❌ Malo: Insertar HTML sin escape
<p><%- userInput %></p>
```

---

## Rate Limiting

### Implementar con express-rate-limit

```bash
npm install express-rate-limit
```

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // Máximo 100 requests por IP
    message: 'Demasiadas peticiones, intenta más tarde'
});

// Aplicar a todas las rutas
app.use(limiter);

// O solo a rutas específicas
app.use('/api/', limiter);
```

---

## HTTPS en Producción

### Con Let's Encrypt (Certbot)

```bash
# Instalar Certbot
sudo apt-get install certbot python3-certbot-nginx

# Obtener certificado
sudo certbot --nginx -d capinettarp.com.ar -d www.capinettarp.com.ar

# Renovación automática (ya configurada)
sudo certbot renew --dry-run
```

### Forzar HTTPS en Nginx

```nginx
server {
    listen 80;
    server_name capinettarp.com www.capinettarp.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name capinettarp.com www.capinettarp.com;
    
    ssl_certificate /etc/letsencrypt/live/capinettarp.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/capinettarp.com/privkey.pem;
    
    # Configuración SSL moderna
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;
    
    # ... resto de la configuración
}
```

---

## Protección contra Ataques Comunes

### XSS (Cross-Site Scripting)

**Prevención**:
- ✅ Usar templates que auto-escapen (EJS con `<%=`)
- ✅ Validar y sanitizar inputs
- ✅ Content Security Policy (CSP)

```javascript
// Header CSP
app.use((req, res, next) => {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com"
    );
    next();
});
```

### CSRF (Cross-Site Request Forgery)

**Prevención**:
- ✅ Tokens CSRF en formularios
- ✅ SameSite cookies
- ✅ Verificar origin/referer headers

### SQL Injection

**Prevención**:
- ✅ Usar queries parametrizadas
- ✅ ORM/ODM (Mongoose, Sequelize)
- ✅ Validar y sanitizar inputs

### DoS (Denial of Service)

**Prevención**:
- ✅ Rate limiting
- ✅ Cloudflare o similar
- ✅ Timeout en requests
- ✅ Límite de tamaño de payloads

---

## Logs y Monitoreo

### Winston para Logs

```bash
npm install winston
```

```javascript
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

// Usar en la app
logger.info('Server started');
logger.error('Error occurred', { error: err });
```

---

## Checklist de Seguridad

### Configuración

- [x] Variables de entorno configuradas
- [x] `.env` en `.gitignore`
- [x] Headers de seguridad implementados
- [x] HTTPS en producción
- [x] Rate limiting activo

### Código

- [x] Validación de inputs
- [x] Sanitización de datos
- [x] No hay secrets hardcodeados
- [x] Dependencias actualizadas
- [x] Auditoría de npm sin vulnerabilidades críticas

### Infraestructura

- [ ] Firewall configurado
- [ ] SSH con key authentication
- [ ] Fail2ban instalado
- [ ] Backups automáticos
- [ ] Monitoreo activo

---

## Respuesta a Incidentes

### Si detectas una vulnerabilidad

1. **NO la publiques públicamente**
2. Envía un email a: seguridad@capinettarp.com.ar
3. Incluye:
   - Descripción detallada
   - Pasos para reproducir
   - Impacto potencial
   - Sugerencias de mitigación

### Divulgación Responsable

- Damos 90 días para corregir vulnerabilidades críticas
- Agradecemos en el README a quien reporte responsablemente
- Posible recompensa según severidad

---

## Recursos Adicionales

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [Express Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
- [npm Security Best Practices](https://docs.npmjs.com/packages-and-modules/securing-your-code)

---

[← Volver al README](../README.md)
