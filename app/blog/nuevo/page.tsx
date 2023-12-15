import { v2 as cloudinary, UploadApiResponse } from 'cloudinary'
import {crearPost} from '../../api/controllers/post';
import { getServerSession } from 'next-auth';

  cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET,
    secure: true
  });

export default function Page() {

  async function createPost(formData: FormData) {
    "use server";

    const session = await getServerSession()

    //UPLOAD FILES TO CLOUDINARY
    const file = formData.get("img") as File
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const res: UploadApiResponse = await new Promise<UploadApiResponse>( (resolve, reject) => {

        cloudinary.uploader.upload_stream( {} , function (error, result) {

            if ( error ) {

                reject ( error );
                return;

            }
            resolve(result)

        }).end(buffer)
    })

    
    //generar thumbnail a partir de la imagen subida anterior
    const thumbnail: String = cloudinary.url(res.public_id, { width: 250, height:200, crop: "fit" })
    
    
    
    const data = {
        titulo: String(formData.get("titulo")),
        descripcion: String(formData.get("desc")),
        autor: String(session.user.name),
        categoria: "social",
        thumbnail,
        foto: String(res.url)
      };

    
    await crearPost(data)
    


    // mutate data
    // revalidate cache
  }

  return (
    <form action={createPost}>
      <div className="py-10">
        <div className="flex flex-col justify-center gap-5 items-center">
          <textarea
            className="border border-black h-[50px] w-[900px] text-3xl resize-none text-center"
            placeholder="Titulo"
           name="titulo"/>
          <div className="border border-black h-[500px] w-[800px]">
            <input type='file' name='img' multiple/>
          </div>
          <textarea
            className="border border-black w-[900px] h-[200px] resize-y text-xl text-center"
            placeholder="Escribe una descripcion para tu publicacion"
          name="desc"/>
          <button className="border border-black" type="submit">subir</button>
        </div>
      </div>
    </form>
  );
}
