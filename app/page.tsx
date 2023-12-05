
import HomeItem from "./components/HomeItem"
import Header from "./components/Header"
import {options} from './api/auth/[...nextauth]/options'
import {getServerSession} from "next-auth/next"

export default async function Home() {
  const session = await getServerSession(options)
  return (
    <div className="w-screen h-full bg-cover bg-center  bg-black" style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/d/db/Entrada_a_comuna_Isla_de_Maipo_Región_Metropolitana_Chile.JPG)'}}>
    <div className='h-full w-full bg-black/30 backdrop-blur-sm flex flex-col gap-[60px]'>
      <Header Session={session}/>
      <div className='gap-[50px] flex flex-col items-center'>
        
        <HomeItem tittle={"¡Únete a la Comunidad de Isla de Maipo!"} desc={"Aquí encontrarás un espacio para interactuar con personas que comparten tus mismos intereses. Nuestra comunidad es un lugar de intercambio de ideas, conocimientos y amistades."} imgSrc="https://i.ibb.co/LhHdC1M/29a123d333f1810364c61bd3918bb6c4-removebg-preview.png" href={`/blog`}/>
        <HomeItem tittle={"Tiendas Online"} desc={"Mercado en línea, donde podrás explorar una variedad de tiendas electrónicas de Isla de Maipo. Desde productos artesanales únicos hasta artículos de uso diario"} imgSrc="https://i.ibb.co/hRdZHYP/ca7f1b0a4d5fe34a7e459cdbc174bef0.jpg" href={`/negocios`}/>
      </div>
      

    </div>
    </div>
  )
}
