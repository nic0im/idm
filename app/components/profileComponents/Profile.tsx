"use client";

import axios from "axios";
import SendFriendRequestBtn from "./SendFriendRequestBtn";
import { useEffect, useState } from "react";
import CancelFriendRequestBtn from "./CancelFriendRequestBtn";


export default function Profile({ user, userLogged }) {


const [currentUser, setCurrentUser] = useState(JSON.parse(user))

  



  // Dates from user profile
  const joined = new Date(currentUser?.createdAt);
  const formattedJoined = joined.toLocaleDateString();
  const lastSeen = new Date(currentUser?.lastSeen);
  const formattedLastSeen = lastSeen.toLocaleDateString();

  //user from session
  const userFromSession = JSON.parse(userLogged) 


  const handleSendFriendRequest = async() => {
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

  const handleRemoveFriend = () => {

    // if()
     console.log(
       `El usuario ${userFromSession.nombre} cancela amistad a ${currentUser?.nombre}`
     ); 
   };

   const handleCancelFriendRequest = async () => {

    try {
      await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/users?cancelFriendRequest=1&from=${userFromSession._id}&to=${currentUser._id}`)
        .then( res => { const newCurrentUser = { ...currentUser };

          // Encuentra la posición del ID a eliminar en el array solicitudes
          const indexToDelete = newCurrentUser.solicitudes.indexOf(res.data);
      
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
    } else if (currentUser.solicitudes.includes(userFromSession._id)) {
      return <CancelFriendRequestBtn handleCancelFriendRequest={handleCancelFriendRequest}/>;
    } else if (currentUser.nombre==userFromSession.nombre) {
      return <button >ownProfilepage</button>;
    } else if (currentUser.amigos.includes(userFromSession._id)) {
      return <button>amigos</button>;
    } else {
      return <SendFriendRequestBtn handleSendFriendRequest={handleSendFriendRequest}/>;
    }
  };

  return currentUser ? (
  <div className="flex flex-col w-[800px] bg-white/60 gap-5 shadow-lg">
        <div className=" w-full py-2 font-semibold bg-green-700/30">
          {currentUser.nombre}
        </div>
    <div className="flex align-middle items-center gap-5 px-10 pt-2">
      
      <div className="flex flex-col gap-4 items-center">
        <img
          className=" h-[120px] w-[120px] rounded-2xl"
          src={currentUser?.foto}
        /> 
    {renderButton()}
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
              {currentUser.amigos?.lenght ? currentUser.amigos.lenght : 0}
            </div>
          </div>
          <div className=" w-full flex px-4 py-1 justify-between">
            <div className="font-semibold">Publicaciones: </div>{" "}
            <div>{currentUser.totalPosts ? currentUser.totalPosts : 0}</div>
          </div>
        </div>
      </div>
      <div className="border w-2/6 bg-black/10 flex flex-col pt-4">
        <div className="">
          Rango
        </div>

      </div>
      </div>
    </div></div>
  ) : (
    <div> Usuario no encontrado</div>
  );
}
