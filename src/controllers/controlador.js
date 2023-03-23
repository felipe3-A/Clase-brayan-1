// Importar modelos y where desde sequelize
import { Proyectos } from '../models/prueba.js'

// Crear las opciones para el crud crear, obtener, actualizar,borrar
export const getproyecto = async (req, res) => {
    const proyecto = await Proyectos.findAll()

    // Ver todos los proyectos por thunder client
    res.json(proyecto)
}


export const postproyecto = async (req, res) => {
    const { name, priority, description, estado } = req.body

    const newproyecto = await Proyectos.create({
        name,
        priority,
        description,
        estado
    })
    // Ver proyecto por thunder client
    res.json(newproyecto)
    // ver proyecto creado por consolaconsole.log(newproyecto)

}
