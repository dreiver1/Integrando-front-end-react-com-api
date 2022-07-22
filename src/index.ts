import "reflect-metadata";
import express, {Request, Response} from 'express';


console.log("funcionou");

const app = express();

app.get("/", (Request:Request, Response:Response)=>{
    return Response.status(200).json({mensage: "Funcinoou"})
})

app.post("/", (Request:Request, Response:Response)=>{
    
})
app.listen("5000", ()=>{
    console.log("servidor onn na porta 5000")
});