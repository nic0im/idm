
import {Schema, model, models} from "mongoose"

const postSchema = new Schema({
  titulo: {type: String},
  thumbnail: {type: String},
  descripcion: {type: String},
  autor:{type: String},
  categoria: {type: String}
},{ timestamps: true });


export default models.Post || model("Post", postSchema);