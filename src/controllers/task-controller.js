import { Tareas } from "../models/task.js"

export const getTasks = async (req, res) => {
    try {
        const tasks = await Tareas.findAll();
        res.json(tasks);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const createTask = async (req, res) => {
    try {
        const { name, done, proyectoId } = req.body

        const newtask = await Tareas.create({
            name,
            done,
            proyectoId
        })
        res.json(newtask);
    } catch (error) {
        return res.status(500).json(message.error.message)
    }
}
export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Tareas.destroy({
            where: { id, },
        });
        console.log(result)
        return res.sendStatus(204)
    }
    catch (error) {
        return res.status(500).json({ mesage: error.message })

    }
}

export const getTask1 = async (req, res) => {
    const { id } = req.params
    try {
        const tarea = await Tareas.findOne({
            where: { id }
        })
        res.json(tarea)
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}
export const updateTask = async (req, res) => {
    const { id } = req.params

    try {
        const tarea = await Tareas.findOne({
            where: { id }
        })
        tarea.set(req.body)
        await tarea.save()
        return res.json(tarea)
    } catch (error) {

    }

}

