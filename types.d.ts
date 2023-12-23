interface User {
    _id?: string;
    nombre?: string;
    foto?: string;
    email?: string;
    amigos?: any[]; // Adjust the type accordingly
    lastSeen?: Date;
    totalPosts?: number;
    solicitudes?: any[]; // Adjust the type accordingly
    comentarios?: Comment[] | Schema.Types.ObjectId[];
    notificaciones?: any[]; // Adjust the type accordingly
  }