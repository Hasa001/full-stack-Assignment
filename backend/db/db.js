import mongoose from "mongoose";
import 'dotenv/config'
const connectDB = async ()=>{
    try {

        const connectionInstance=await mongoose.connect(`${process.env.MONGO_URL}/cards`)
        console.log("connected to host: ",connectionInstance.connection.host)
        
    } catch (error) {
        console.log("MONGOOSE CONNECTION ERROR: ",error);
        process.exit(1)

    }
}

export default connectDB