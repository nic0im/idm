import {connect, connection} from 'mongoose';



export async function connectDB(){

    const conn = {
        isConnected: false
    }
    if(conn.isConnected) return;

    const db = await connect(process.env.MONGODB_URI)
    //conn.isConnected = connection[0].readyState
}

connection.on('connected', () => { console.log("Mongoose is connected")})
connection.on('error',(err) => {
    console.log("mongoose connection error", err)
})