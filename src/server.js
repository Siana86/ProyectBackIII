import app from './app.js';
import connectMongoDB from './config/db.js';

connectMongoDB(); 

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));

// Manejo de errores globales
process.on('unhandledRejection', (reason) => {
    console.error('Rechazo no manejado:', reason);
    server.close(() => process.exit(1));
});

process.on('uncaughtException', (err) => {
    console.error('Excepción no capturada:', err);
    server.close(() => process.exit(1));
});

// Señales de terminación
process.on('SIGINT', () => {
    console.log('SIGINT recibida. Cerrando servidor...');
    server.close(() => process.exit(0));
});
process.on('SIGTERM', () => {
    console.log('SIGTERM recibida. Cerrando servidor...');
    server.close(() => process.exit(0));
});

process.on('exit', (code) => {
    console.log(`👋 El proceso está saliendo con código ${code}`);
});