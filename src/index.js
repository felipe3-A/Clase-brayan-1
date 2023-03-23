// Importar arcchivo app y sequelize
import app from "./app.js";
import { Sequelize } from "./database/database.js";

async function main(){
    try{
        await Sequelize.sync({})
        app.listen(3000)
        console.log("El servidor esta funcionando correctamente",3000)
    }catch(error){

    }
   
} 
main();