import mongoose from "mongoose";

export const connectMongoDB = async () => {
    if (process.env.NODE_ENV === 'test') {
        console.log('Saltando conexión a MongoDB real (modo test)');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Conectado con mongoDB');
    } catch (error) {
        console.error('Error al conectar con MongoDB:', error);
    }
};



// const connectMongoDB = async () => {
//     try {
//         mongoose.set('strictQuery', true);

//         await mongoose.connect(process.env.URI_MONGODB);
//         console.log("Conectado con mongoDB");

//     } catch (error) {
//         console.log("Error al conectar con mongoDB", error.message);
//     }
// };

export default connectMongoDB; 