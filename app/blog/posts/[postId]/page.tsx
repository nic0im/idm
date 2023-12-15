import { comentarPost, getSinglePost } from "../../../api/controllers/post";
import SingleComment from "../../../components/SingleComment";

type Params = {
  params: {
    postId: string;
  };
};

export default async function Post({ params: { postId } }: Params) {
  
  const post = await getSinglePost(postId)
  console.log(post)
  const comentar = async(formData: FormData) => {
    "use server"
    const comentario = formData.get("comentario")
    try {
      const comentarionuevo = await comentarPost(postId, comentario, post.autor)
    }catch(err){
      console.log(err)
    }
    
  }

  

  return (
    <div className="justify-center flex flex-col p-4 gap-5">
      <div className="py-4 text-3xl font-semibold  text-center">{post.titulo}</div>
      <div className="flex flex-col items-center justify-center gap-2">
                <img src={post.foto} className="border border-black h-[500px]" />
                <div>
                  {post.descripcion}
                </div>
                <div className=" w-[800px] h-full rounded-sm mt-5">
                  <div className="py-4 px-12 gap-2 flex flex-col">
                    <div className="text-lg font-semibold">
                    Comentarios
                    </div>
                    <form action={comentar}>
                    <textarea name="comentario" className="border border-black w-full rounded-md h-[150px] resize-none p-2" placeholder="Deja tu comentario"/>
                    <div className="flex justify-end pr-3 pt-1 border-b pb-6">
                    <button className="border border-gray-400 rounded bg-gray-200 w-[100px] h-[35px]" type="submit"> Publicar</button>
                    </div>
                    </form>
                    <div className="flex flex-col gap-3">
                      {post.comentarios.map((c)=>{
                        console.log(c)
                        return(<SingleComment c={c}/>)
                      })}
                      
                    </div>
                  </div>

                </div>
      </div>
      
      
    </div>
  );
}
