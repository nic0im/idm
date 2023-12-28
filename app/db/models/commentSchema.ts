import {Schema, model, models} from "mongoose"

const commentSchema = new Schema({
  objetivoId: {type: Schema.Types.ObjectId},
  points: {type:Number},
  autor: {type: Schema.Types.ObjectId},
  autorImg:{type:String},
  comentario:{type: String},
  img: {type: String},
  autorNombre:{type:String}
},{ timestamps: true });


export default models.Comentario || model("Comentario", commentSchema);