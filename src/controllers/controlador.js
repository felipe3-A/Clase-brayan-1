// Importar modelos y where desde sequelize
import { Proyectos } from '../models/prueba.js'

// Crear las opciones para el crud crear, obtener, actualizar,borrar


export const getproyecto = async (req, res) => {
    const proyecto = await Proyectos.findAll()

    // Ver todos los proyectos por thunder client
    res.json(proyecto)
}

export const getproyecto1=async (req, res) => {
  try {
    const{id}=req.params;
    const proyecto = await Proyectos.findOne({
        where:{
            id,
        },
    });
    res.json(proyecto)
  } catch (error) {
    return res.status(500)
            .json(message.error.message)
  }  
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
export const deleteproyecto = async (req, res) => {
    try {
        const { id } = req.params;
        await Proyectos.destroy({
            where: {
                id,
            },
        });
        res.sendStatus(204)
    }
    catch (error) {

        return res.status(500)
        .json(message.error.message)

    }
}

export const updateproyecto = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, priority, description, estado } = req.body
        const proyecto = await Proyectos.findByPk(id)
        proyecto.name = name
        proyecto.priority = priority
        proyecto.description = description
        proyecto.estado = estado

        // Guarda los datos dentro de la base de datos
        await proyecto.save()
        res.json(proyecto)


    } catch (error) {
        return res.status(500)
            .json(message.error.message)
    }
}