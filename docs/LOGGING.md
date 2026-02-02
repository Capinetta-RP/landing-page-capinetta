# 📝 Sistema de Logging con Winston

## Descripción

El proyecto utiliza [Winston](https://github.com/winstonjs/winston) como sistema de logging profesional, reemplazando los `console.log` nativos por un sistema más robusto y escalable.

## Características

✅ **Múltiples niveles de log**: error, warn, info, http, debug
✅ **Salida a consola con colores**: Para fácil lectura en desarrollo
✅ **Archivos de log rotables**: Limita el tamaño y mantiene histórico
✅ **Formato JSON en archivos**: Para procesamiento automatizado
✅ **Adaptable al entorno**: Más verboso en desarrollo, conciso en producción

## Niveles de Log

| Nivel | Uso | Color | Ejemplo |
|-------|-----|-------|---------|
| `error` | Errores críticos que requieren atención | 🔴 Rojo | Fallos en API, errores de servidor |
| `warn` | Advertencias que no son críticas | 🟡 Amarillo | Configuración faltante, deprecaciones |
| `info` | Información general del sistema | 🟢 Verde | Inicio del servidor, eventos importantes |
| `http` | Logs de peticiones HTTP | 🟣 Magenta | Requests, responses |
| `debug` | Información detallada para debugging | 🔵 Azul | Variables, flujo de ejecución |

## Estructura de Archivos

```
landing-page-capinetta/
├── utils/
│   └── logger.js          # Configuración de Winston
├── logs/                  # Carpeta generada automáticamente
│   ├── error.log         # Solo errores
│   └── combined.log      # Todos los logs
└── server.js             # Usa el logger
```

## Uso en el Código

### Importar el Logger

```javascript
const logger = require('./utils/logger');
```

### Ejemplos de Uso

```javascript
// Información general
logger.info('Servidor iniciado correctamente');

// Advertencias
logger.warn('Token de Discord no configurado, usando avatares por defecto');

// Errores
logger.error('Error al conectar con la base de datos', { 
    error: err.message,
    stack: err.stack 
});

// HTTP logs
logger.http('GET /api/users 200 45ms');

// Debug (solo en desarrollo)
logger.debug('Procesando solicitud', { 
    userId: user.id,
    action: 'update' 
});
```

### Con Contexto Adicional

Winston permite pasar objetos para contexto adicional:

```javascript
logger.error('Error fetching Discord avatar:', {
    error: error.message,
    userId: req.params.userId,
    timestamp: new Date().toISOString()
});
```

## Archivos de Log

### `logs/error.log`
- Solo contiene errores (nivel `error`)
- Formato JSON para fácil parsing
- Rotación automática: máximo 5 archivos de 5MB cada uno

### `logs/combined.log`
- Contiene todos los niveles de log
- Formato JSON
- Rotación automática: máximo 5 archivos de 5MB cada uno

## Configuración por Entorno

### Desarrollo (`NODE_ENV=development`)
- Nivel: `debug` (todos los logs)
- Salida: Consola con colores + Archivos
- Verbose y detallado

### Producción (`NODE_ENV=production`)
- Nivel: `info` (info, warn, error)
- Salida: Consola sin colores + Archivos
- Conciso y enfocado

## Rotación de Logs

Los archivos de log tienen configuración automática de rotación:
- **Tamaño máximo por archivo**: 5MB
- **Archivos máximos**: 5
- **Total de espacio**: ~25MB (5 archivos × 5MB)

Cuando un archivo alcanza 5MB, Winston lo renombra y crea uno nuevo:
```
error.log      → error.log.1
error.log.1    → error.log.2
error.log.2    → error.log.3
...
```

## Integración con Morgan (Opcional)

Winston incluye un stream para integración con Morgan (HTTP logger middleware):

```javascript
const morgan = require('morgan');
const logger = require('./utils/logger');

// Usar Winston como stream de Morgan
app.use(morgan('combined', { stream: logger.stream }));
```

## Ver Logs en Tiempo Real

### En Desarrollo
Los logs aparecen automáticamente en la consola con colores.

### En Producción (Linux/VPS)

```bash
# Ver últimas líneas de combined.log
tail -f logs/combined.log

# Ver solo errores
tail -f logs/error.log

# Ver con formato legible (requiere jq)
tail -f logs/combined.log | jq '.'
```

## Monitoreo en Producción

### Con PM2

```bash
# Ver logs de la aplicación
pm2 logs capinetta-web

# Ver solo errores
pm2 logs capinetta-web --err

# Limpiar logs antiguos
pm2 flush
```

## Buenas Prácticas

✅ **Usar niveles apropiados**
```javascript
// ✅ Bueno
logger.error('Database connection failed', { error: err.message });
logger.info('User logged in', { userId: user.id });

// ❌ Malo
logger.info('CRITICAL ERROR: Server crashed');
logger.error('User clicked button');
```

✅ **Incluir contexto útil**
```javascript
// ✅ Bueno
logger.error('Payment failed', {
    userId: user.id,
    amount: payment.amount,
    error: err.message
});

// ❌ Malo
logger.error('Payment failed');
```

✅ **No loguear información sensible**
```javascript
// ❌ NUNCA hacer esto
logger.info('User login', { 
    email: user.email,
    password: user.password  // ❌ Nunca loguear contraseñas
});

// ✅ Bueno
logger.info('User login', { 
    userId: user.id,
    email: user.email
});
```

## Análisis de Logs

### Buscar errores específicos

```bash
# Buscar por texto
grep "Discord avatar" logs/error.log

# Buscar por fecha
grep "2026-02-02" logs/combined.log

# Con jq (JSON)
cat logs/error.log | jq 'select(.message | contains("Discord"))'
```

### Contar errores por tipo

```bash
# Contar líneas de error
wc -l logs/error.log

# Agrupar por tipo de error (requiere jq)
cat logs/error.log | jq -r '.error' | sort | uniq -c
```

## Migración desde console.log

Si encuentras código antiguo con `console.log`, reemplázalo:

```javascript
// ❌ Antiguo
console.log('Server started');
console.error('Error:', error);

// ✅ Nuevo
logger.info('Server started');
logger.error('Error:', { error: error.message });
```

## Recursos Adicionales

- [Winston Documentation](https://github.com/winstonjs/winston)
- [Winston Best Practices](https://github.com/winstonjs/winston#usage)
- [Log Levels RFC 5424](https://datatracker.ietf.org/doc/html/rfc5424)

---

**Implementado**: 2 de febrero de 2026  
**Ubicación**: `utils/logger.js`  
**Dependencia**: `winston@^3.x`
