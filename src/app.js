// Exportar express
import Express from 'express';
const app=Express();
import pruebarouter from "./router/prueba-router"

app.use(Express.json())
app.use(pruebarouter)
export default app;