import type { NextAuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider  from "next-auth/providers/credentials";
import Usuario from "../../../db/models/userSchema";
import {connectDB} from "../../../db/mongoose";

import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./mongodb"

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

    adapter: MongoDBAdapter(clientPromise),
    
      callbacks: {
        async session({ session, token, user }) {
          await connectDB();
      
          try{
            const usuario = await Usuario.find({ nombre: session.user.name });

            if (usuario.length === 0) {
              const nuevoUsuario = new Usuario({
                nombre: session.user.name,
                foto: session.user.image,
                email: session.user.email,
              });
              await nuevoUsuario.save();
            } else {
              try {
                const updatedUser = await Usuario.findByIdAndUpdate(
                  { _id: usuario[0]._id.toString() },
                  { lastSeen: new Date() },
                  { new: true } // Ensure that the updated document is returned
                )

                //session.user._id = updatedUser._id.toString()

              } catch (error) {
                console.error('Error updating user:', error);
              }
            }

            

          }catch(err){console.log(err)}
          
      
         
          
          console.log("session??? ", session, token )
          return session;
        },
      }
}