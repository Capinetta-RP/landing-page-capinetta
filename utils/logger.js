const winston = require('winston');
const path = require('path');

// Definir niveles de log personalizados
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};

// Definir colores para cada nivel
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'blue',
};

// Aplicar colores a winston
winston.addColors(colors);

// Determinar el nivel de log basado en el entorno
const level = () => {
    const env = process.env.NODE_ENV || 'development';
    const isDevelopment = env === 'development';
    return isDevelopment ? 'debug' : 'info';
};

// Formato personalizado para consola
const consoleFormat = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.colorize({ all: true }),
    winston.format.printf(
        (info) => `${info.timestamp} [${info.level}]: ${info.message}`
    )
);

// Formato para archivos (sin colores)
const fileFormat = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
);

// Definir transportes
const transports = [
    // Consola - siempre activa
    new winston.transports.Console({
        format: consoleFormat,
    }),
    // Archivo de errores - solo errores
    new winston.transports.File({
        filename: path.join(__dirname, '../logs/error.log'),
        level: 'error',
        format: fileFormat,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
    }),
    // Archivo combinado - todos los logs
    new winston.transports.File({
        filename: path.join(__dirname, '../logs/combined.log'),
        format: fileFormat,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
    }),
];

// Crear el logger
const logger = winston.createLogger({
    level: level(),
    levels,
    transports,
    // No salir en excepciones no capturadas
    exitOnError: false,
});

// Stream para Morgan (HTTP logging middleware)
logger.stream = {
    write: (message) => {
        logger.http(message.trim());
    },
};

module.exports = logger;
