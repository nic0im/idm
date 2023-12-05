import type { NextAuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider  from "next-auth/providers/credentials";

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
    ]
}