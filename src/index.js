// Importar arcchivo app y sequelize
import app from "./app.js";
import  {sequelize}  from "./database/database.js";



async function main(){
    try{
        await sequelize.sync({});
        app.listen(3000)
        console.log("El servidor esta funcionando correctamente",3000)
    }catch(error){
        console.log("El servidor no esta funcionando c",error)
    }
   
} 
main();