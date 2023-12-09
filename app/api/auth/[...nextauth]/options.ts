import type { NextAuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider  from "next-auth/providers/credentials";
import Usuario from "../../../db/models/userSchema";
import {connectDB} from "../../../db/mongoose";

export const options: NextAuthOptions = {

    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
      CredentialsProvider({
        name: "Credentials",
        credentials: {
            username: {
                label: "Username:",
                type:"text",
                placeholder:"your-username"
            },
            password:{
                label:"Password",
                type:"password",
                placeholder: "password"
            }
        },
        async authorize(credentials){

            const user = {id:"12", name: "nico", password: "nextauth"}

            if (credentials?.username === user.name && credentials?.password === user.password){
                return user
            } else {
                return null
            }

        }
      })
    ],
    callbacks: {
        async session({ session, token, user }) {
        
            await connectDB()

            const usuario = await Usuario.find({nombre: `${session.user.name}`})

            if (usuario.length == 0) {
                console.log("checkpoint")
                const nuevoUsuario = new Usuario({
                    nombre: session.user.name,
                    foto: session.user.image,
                    email: session.user.email
                })
                await nuevoUsuario.save()
            }
            
          
          return session
        }
      }
}