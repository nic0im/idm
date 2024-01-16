"use client";

import axios from "axios";
import SendFriendRequestBtn from "./SendFriendRequestBtn";
import { useEffect, useState } from "react";
import CancelFriendRequestBtn from "./CancelFriendRequestBtn";
import SvgPencil from "../../svg/SvgPencil";

export default function Profile({ user, userLogged }) {

const [currentUser, setCurrentUser] = useState(JSON.parse(user))
const [relations, setRelations] = useState({alreadySent:false, areFriends:false})


  // Dates from user profile
  const joined = new Date(currentUser?.createdAt);
  const formattedJoined = joined.toLocaleDateString();
  
  const lastSeen = new Date(currentUser?.lastSeen);
  //const formattedLastSeen = lastSeen.toLocaleDateString();

  //user from session
  
  const userFromSession = JSON.parse(userLogged) 
  const [formattedLastSeen, setFormattedLastSeen] = useState('');

  useEffect(() => {
    const dateObject = new Date(lastSeen);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - dateObject.getTime();
    const secondsDifference = Math.floor(timeDifference / 1000);
  
    let formattedTime;
  
    if (secondsDifference < 60) {
      formattedTime = `hace ${secondsDifference} segundos`;
    } else if (secondsDifference < 3600) {
      const minutes = Math.floor(secondsDifference / 60);
      formattedTime = `hace ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`;
    } else if (secondsDifference < 86400) {
      const hours = Math.floor(secondsDifference / 3600);
      formattedTime = `hace ${hours} ${hours === 1 ? 'hora' : 'horas'}`;
    } else {
      const days = Math.floor(secondsDifference / 86400);
      formattedTime = `hace ${days} ${days === 1 ? 'día' : 'días'}`;
    }
  
    setFormattedLastSeen(formattedTime);
  }, [lastSeen]);
  
  
  const handleSendFriendRequest = async() => {
    setRelations({alreadySent:true, areFriends:false})
    try {
      await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/users?friendRequest=1&from=${userFromSession._id}&to=${currentUser._id}`)
      .then((res)=>{
      
        // Manejador de eventos para agregar el nuevo ID al arra
          const newCurrentUser = { ...currentUser };
      
          // Agrega el nuevo ID al array solicitudes
          newCurrentUser.solicitudes.push(userFromSession._id);
      
          // Actualiza el estado con el nuevo objeto completo
          setCurrentUser(newCurrentUser);
          return
        })

    } catch (err) {
      console.log(err)
    }
  };


   const handleCancelFriendRequest = async () => {
    setRelations({alreadySent:false, areFriends:false});
    try {
      await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/users?cancelFriendRequest=1&from=${userFromSession._id}&to=${currentUser._id}`)
        .then( res => { const newCurrentUser = { ...currentUser };

          // Encuentra la posición del ID a eliminar en el array solicitudes
          const indexToDelete = newCurrentUser.solicitudes.indexOf(res.data._id);
      
          // Verifica si el ID está presente en el array antes de intentar eliminarlo
          if (indexToDelete !== -1) {
            // Elimina el ID del array
            newCurrentUser.solicitudes.splice(indexToDelete, 1);
      
            // Actualiza el estado con el nuevo objeto completo
            setCurrentUser(newCurrentUser);
      
            // Imprime el resultado actualizado
          } else {
            console.log('El ID no se encuentra en el array de solicitudes.');
          }})
    }
    catch (err) {
      console.log(err)} 
   } 


 
  
  

  const renderButton = () => {
    if (userFromSession==null) {
      return null; // No mostrar ningún botón si el usuario no está logeado
    } else if (relations.alreadySent) {
      return <CancelFriendRequestBtn handleCancelFriendRequest={handleCancelFriendRequest}/>;
    } else if (currentUser.nombre==userFromSession.nombre) {
      return
    } else if (relations.areFriends) {
      return <button>amigos</button>;
    } else {
      return <SendFriendRequestBtn handleSendFriendRequest={handleSendFriendRequest}/>;
    }
  };

  useEffect(() => {
  
    const getRelationsFromUsers= async () => {
     try{
      const res = await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/users?relation=1&from=${userFromSession._id}&to=${currentUser._id}`).then((resp)=>setRelations(resp.data))
      return res}catch(err){console.log(err)
        return null}
    }
      getRelationsFromUsers();

  
  },[])
    

  return currentUser ? (
  <div className="flex flex-col w-[800px] gap-5 shadow-lg rounded-md overflow-hidden bg-gray-100">
        <div className=" w-full py-2 bg-gray-900/10 text-xl font-semibold">
          {currentUser.nombre}
        </div>
    <div className="flex align-middle items-center gap-5 px-10 pt-2">
      
      <div className="flex flex-col gap-4 items-center">
      {
      (currentUser.nombre==userFromSession?.nombre) ? (
      <div className="">
        <img
          className=" h-[120px] w-[120px] rounded-2xl"
          src={currentUser?.foto}
        /><button className="hover:font-bold transition-all">
        <div className="flex items-center gap-1 justify-center mt-2">
          Editar
        <SvgPencil/> 
          </div></button>
          </div>):(<><img
          className=" h-[120px] w-[120px] rounded-2xl"
          src={currentUser?.foto}
        /></>)
      
      }
      
    { renderButton()}
      </div>
      <div className="flex justify-between w-full">
      <div className=" h-full w-4/6 flex flex-col py-2 px-5">
        
        <div className="w-full mt-1 h-full flex flex-col gap-2">
          <div className=" w-full flex px-4 py-1 justify-between">
            <div className="font-semibold">Se unio:</div>
            <div>{formattedJoined}</div>
          </div>
          <div className=" w-full flex px-4 py-1 justify-between">
            <div className=" font-semibold">Ultima conexion:</div>
            <div>{formattedLastSeen}</div>
          </div>
          <div className=" w-full flex px-4 py-1 justify-between">
            <div className="font-semibold">Total amigos:</div>{" "}
            <div>
              {currentUser.amigos}
            </div>
          </div>
          <div className=" w-full flex px-4 py-1 justify-between">
            <div className="font-semibold">Publicaciones: </div>{" "}
            <div>{currentUser.totalPosts ? currentUser.totalPosts : 0}</div>
          </div>
        </div>
      </div>
      <div className="border w-[150px]  bg-black/10 flex flex-col p-4 items-center rounded-md">
        <div className=" font-semibold font-sans">
          Rango
        </div>
        <img src="https://i.ibb.co/845g17f/gorro-huaso-flock-removebg-preview.png" className="h-[120px] w-[120px] ml-2"/>
        <p className="font-sans font-semibold">Huaso Aprendiz</p>
      </div>
      </div>
    </div></div>
  ) : (
    <div> Usuario no encontrado</div>
  );
}
