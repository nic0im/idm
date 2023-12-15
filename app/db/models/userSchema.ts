
import {Schema, model, models} from "mongoose"

const userSchema = new Schema({
  nombre: {type: String},
  foto: {type: String},
  email: {type: String},
  amigos:{type: Array},
  lastSeen: { type: Date },
  totalPosts: {type: Number},
  solicitudes: {type: Array}
},{ timestamps: true });


export default models.Usuario || model("Usuario", userSchema);