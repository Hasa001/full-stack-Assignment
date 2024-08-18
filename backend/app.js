import express, { urlencoded } from 'express'
import connectDB from './db/db.js';
import cors from 'cors'

const app = express();
const Port = process.env.PORT || 300;

app.use(express.json())
// app.use(express.urlencoded({extended:true}))
app.use(cors())


import help_card_router from './routes/help_card.routes.js'

app.use("/api/v1",help_card_router)



connectDB()
.then(()=>{
    app.on("error",(err)=>{console.log(err)})
    app.listen(Port,()=> console.log(`listening on port ${Port}`))
})
.catch((err)=>{
     console.log("mongodb error : ",err)
})
