import {Schema, model, models} from "mongoose"

const commentSchema = new Schema({
  points: {type:Number},
  autor: {type: Schema.Types.ObjectId},
  comentario:{type: String},
  img: {type: String},
},{ timestamps: true });


export default models.Comentario || model("Comentario", commentSchema);