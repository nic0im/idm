
import {Schema, model, models} from "mongoose"

const userSchema = new Schema({
  nombre: {type: String},
  foto: {type: String},
  email: {type: String},
  amigos:{type: Array},
  lastSeen: { type: Date },
  totalPosts: {type: Number},
  solicitudes: {type: Array},
  comentarios:[{ type: Schema.Types.ObjectId, ref: 'Comentario' }],
  notificaciones:{type: Array}
},{ timestamps: true });


export default models.Usuario || model("Usuario", userSchema);