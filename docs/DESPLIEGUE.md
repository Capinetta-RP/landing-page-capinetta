# 🚀 Guía de Despliegue

## Opción 1: Despliegue en Vercel (Recomendado)

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Iniciar sesión
vercel login

# 3. Desplegar
vercel

# 4. Desplegar a producción
vercel --prod
```

### Configuración en Vercel

1. El archivo `vercel.json` ya está configurado
2. Agrega las variables de entorno en el dashboard de Vercel
3. Deploy automático con cada push a `main`

---

## Opción 2: Despliegue en Railway

1. Ve a [Railway.app](https://railway.app)
2. Conecta tu repositorio de GitHub
3. Railway detectará automáticamente el proyecto Node.js
4. Configura las variables de entorno en el panel:
   - `PORT=3000`
   - `NODE_ENV=production`
   - `DISCORD_BOT_TOKEN=tu_token`
5. Deploy automático con cada push a `main`

---

## Opción 3: Despliegue en Render

1. Ve a [Render.com](https://render.com)
2. Crea un nuevo "Web Service"
3. Conecta tu repositorio
4. Configuración:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: Node
5. Agrega variables de entorno:
   ```
   PORT=3000
   NODE_ENV=production
   DISCORD_BOT_TOKEN=tu_token
   ```
6. Deploy automático

---

## Opción 4: VPS/Servidor Propio

### Instalación Inicial

```bash
# 1. Conectar al servidor
ssh user@your-server.com

# 2. Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. Instalar PM2 (gestor de procesos)
sudo npm install -g pm2

# 4. Clonar repositorio
git clone https://github.com/Capinetta-RP/landing-page-capinetta.git
cd landing-page-capinetta

# 5. Instalar dependencias
npm install --production

# 6. Configurar variables de entorno
nano .env
```

### Iniciar con PM2

```bash
# Iniciar aplicación
pm2 start server.js --name "capinetta-web"

# Guardar configuración
pm2 save

# Configurar inicio automático
pm2 startup

# Ver logs
pm2 logs capinetta-web

# Reiniciar
pm2 restart capinetta-web

# Detener
pm2 stop capinetta-web
```

### Configurar Nginx como Reverse Proxy

```bash
# Instalar Nginx
sudo apt-get install nginx

# Crear archivo de configuración
sudo nano /etc/nginx/sites-available/capinetta
```

**Configuración Nginx**:
```nginx
server {
    listen 80;
    server_name capinettarp.com.ar www.capinettarp.com.ar;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**Activar configuración**:
```bash
# Crear enlace simbólico
sudo ln -s /etc/nginx/sites-available/capinetta /etc/nginx/sites-enabled/

# Verificar configuración
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx
```

### Configurar SSL con Let's Encrypt

```bash
# Instalar Certbot
sudo apt-get install certbot python3-certbot-nginx

# Obtener certificado SSL
sudo certbot --nginx -d capinettarp.com.ar -d www.capinettarp.com.ar

# Renovación automática ya está configurada
```

---

## Variables de Entorno en Producción

Asegúrate de configurar estas variables en tu plataforma de deploy:

```env
PORT=3000
NODE_ENV=production
DISCORD_BOT_TOKEN=your_token_here
BASE_URL=https://capinettarp.com.ar
```

---

## Actualización en Producción

### Con PM2 (VPS)

```bash
# Navegar al directorio
cd landing-page-capinetta

# Obtener últimos cambios
git pull origin main

# Instalar nuevas dependencias (si hay)
npm install --production

# Reiniciar aplicación
pm2 restart capinetta-web
```

### Con Vercel/Railway/Render

- Los deploys son automáticos con cada push a `main`
- También puedes hacer deploy manual desde el dashboard

---

## Monitoreo y Logs

### PM2 Dashboard

```bash
# Ver procesos activos
pm2 list

# Ver logs en tiempo real
pm2 logs capinetta-web

# Ver métricas
pm2 monit

# Ver información detallada
pm2 show capinetta-web
```

---

[← Volver al README](../README.md)
