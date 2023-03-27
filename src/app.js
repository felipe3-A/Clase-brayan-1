// Exportar express
import express from 'express';
import router from './router/router.js';
import routertask from './router/router-task.js';
const app=express();


app.use(express.json())

app.use(router)
app.use(routertask)

export default app;