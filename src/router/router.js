import { Router } from "express";
import { getproyecto, postproyecto } from "../controllers/controlador.js";
const router=Router()

// Definir rutas

router.get('/proyectos',getproyecto)
router.get('/proyectos/:id')
router.post('/proyectos',postproyecto)
router.put('/proyectos/id')
router.delete('/proyectos/id')

export default router