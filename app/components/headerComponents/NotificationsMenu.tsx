import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleNotification from './SingleNotification';

export default function NotificationsMenu({ solicitudes, loggedUserId }) {
  const [fRequests, setfRequests] = useState(solicitudes);
  const [userLoggedId, setUserLoggedId] = useState(loggedUserId);

  useEffect(() => {
    setfRequests(solicitudes); // Update state when prop changes
  }, []);

  const handleAccept = async (from) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/users?acceptFR=1&from=${from}&to=${userLoggedId}`
      );

      // Use callback function with the current state to avoid potential issues
      setfRequests((prevRequests) =>
        prevRequests.filter((objeto) => objeto.id !== from)
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleReject = async (from) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/users?cancelFriendRequest=1&from=${from}&to=${userLoggedId}`
      );

      setfRequests((prevRequests) =>
        prevRequests.filter((objeto) => objeto.id !== from)
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="border-2 border-gray-400 absolute right-11 rounded-md -bottom-[201px] w-[350px] bg-black/40 text-center z-10">
      <div className="py-1 text-gray-600 bg-gray-200 text-lg font-bold border-b-2 border-gray-400">
        Notificaciones:
      </div>
      {solicitudes?.length > 0 ? (
        <div className="h-[200px] overflow-y-auto text-black text-lg flex flex-col gap-2 pt-2 px-3">
          {fRequests.map((s) => (
            
            <SingleNotification
              key={s._id}
              solicitud={s}
              handleAccept={handleAccept}
              handleReject={handleReject}
            />
          ))}
        </div>
      ) : (
        <div className="h-[200px] overflow-y-auto text-lg flex flex-col gap-2 pt-2 px-3 text-white">
          No tienes notificaciones
        </div>
      )}
    </div>
  );
}
