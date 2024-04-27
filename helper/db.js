import mongoose from "mongoose"

const config ={
    isConnected:0,
}
export const connectDb=async()=>{
    if(config.isConnected){
        return 
    }
    try{
        const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName:"Med_Vendor"
        })
        console.log("db connected...")
        config.isConnected=connection.readyState;
    }
    catch(error){
        console.log("Failed to connect")
        console.log(error)
    }
}