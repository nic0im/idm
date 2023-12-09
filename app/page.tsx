
import HomeItem from "./components/HomeItem"



export default async function Home() {

  return (
    <div className="w-full h-[700px] bg-cover bg-center  bg-black" style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/d/db/Entrada_a_comuna_Isla_de_Maipo_Región_Metropolitana_Chile.JPG)'}}>
    <div className='h-full w-full bg-black/30 backdrop-blur-sm flex flex-col gap-[60px]'>
      <div className='gap-[80px] flex my-20 justify-center'>
        <HomeItem tittle={"Comunidad"} desc={"Comparte ideas con la comunidad."} imgSrc="https://i.ibb.co/LhHdC1M/29a123d333f1810364c61bd3918bb6c4-removebg-preview.png" href={`/blog`}/>
        <HomeItem tittle={"Tiendas Online"} desc={"Explora una variedad de tiendas en Isla de Maipo."} imgSrc="https://i.ibb.co/hRdZHYP/ca7f1b0a4d5fe34a7e459cdbc174bef0.jpg" href={`/negocios`}/>
        <HomeItem tittle={"Blog Isla de maipo"} desc={"Explora sitios de interes en Isla de Maipo."} imgSrc="https://i.ibb.co/hRdZHYP/ca7f1b0a4d5fe34a7e459cdbc174bef0.jpg" href={`/negocios`}/>
      </div>
      

    </div>
    </div>
  )
}
