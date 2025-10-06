import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        
        await mongoose.connect(process.env.URI_MONGODB);
        console.log("Conectado con mongoDB");
        
    } catch (error) {
        console.log("Error al conectar con mongoDB", error.message);
    }
};

export default connectMongoDB;