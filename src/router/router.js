import { Router } from "express";
import { deleteproyecto, getproyecto, getproyecto1, postproyecto, updateproyecto } from "../controllers/controlador.js";
const router=Router()

// Definir rutas

router.get('/proyectos',getproyecto)
router.get('/proyectos/:id',getproyecto1)
router.post('/proyectos',postproyecto)
router.put('/proyectos/:id',updateproyecto)
router.delete('/proyectos/:id',deleteproyecto)

export default router