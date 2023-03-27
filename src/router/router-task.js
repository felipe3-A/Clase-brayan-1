import {Router} from 'express'
import { createTask, deleteTask, getTask1, getTasks, updateTask } from '../controllers/task-controller.js';

const router =Router();

router.get('/tareas',getTasks)
router.post('/tareas',createTask)
router.get('/tareas/:id',getTask1)
router.put('/tareas/:id',updateTask)
router.delete('/tareas/:id',deleteTask)

export default router;