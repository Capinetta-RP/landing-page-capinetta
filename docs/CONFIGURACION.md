# 🔧 Configuración Avanzada

## Discord Bot para Avatares de Staff

Para obtener avatares dinámicos del equipo desde Discord:

### 1. Crear Aplicación en Discord

- Ve al [Discord Developer Portal](https://discord.com/developers/applications)
- Click en "New Application"
- Dale un nombre (ej: "Capinetta Web Bot")

### 2. Crear Bot

- Ve a la sección "Bot" en el panel izquierdo
- Click en "Add Bot" y confirma
- En "Privileged Gateway Intents", habilita:
  - ✅ Presence Intent
  - ✅ Server Members Intent

### 3. Obtener Token

- En la sección "Bot", click en "Reset Token"
- Copia el token generado
- Pégalo en tu archivo `.env`:

```env
DISCORD_BOT_TOKEN=MTQ2MTgxOTQzOTI3OTI0MzMwNA.GeFfOw.example_token_here
```

### 4. Invitar el Bot al Servidor

- Ve a "OAuth2" > "URL Generator"
- Selecciona scopes: `bot`
- Permisos: `Read Messages/View Channels`
- Copia la URL generada y ábrela en el navegador
- Selecciona tu servidor de Discord

### 5. Configurar IDs de Staff

Edita el archivo donde se definen los miembros del staff (generalmente en `views/partials/staff.ejs` o en el servidor):

```javascript
const staffMembers = [
  { 
    id: '1234567890123456789',  // ID de Discord del usuario
    role: 'Fundador',
    name: 'Nombre del Staff'
  },
  // ... más miembros
];
```

> **💡 Tip**: Para obtener IDs de usuario en Discord, habilita el Modo Desarrollador en Configuración > Avanzado > Modo Desarrollador, luego haz clic derecho en un usuario > Copiar ID.

---

## Variables de Entorno Completas

```env
# Servidor
PORT=3000
NODE_ENV=production  # development | production

# Discord Bot (opcional)
DISCORD_BOT_TOKEN=your_discord_bot_token_here

# URLs (producción)
BASE_URL=https://capinettarp.com.ar
DISCORD_INVITE=https://discord.gg/tpxRFHugX7

# Analytics (opcional)
GA_TRACKING_ID=G-XXXXXXXXXX
```

---

## Configuración de Entornos

### Desarrollo

```env
PORT=3000
NODE_ENV=development
DISCORD_BOT_TOKEN=your_dev_token
```

### Producción

```env
PORT=3000
NODE_ENV=production
DISCORD_BOT_TOKEN=your_prod_token
BASE_URL=https://capinettarp.com.ar
```

---

[← Volver al README](../README.md)
