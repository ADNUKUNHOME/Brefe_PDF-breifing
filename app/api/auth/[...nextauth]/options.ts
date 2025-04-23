import type { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions  =  {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-password"
                }
            },
            async authorize(credentials) {
                const user = { id: "42", name: "Dave", password: "nextauth"}

                if(credentials?.username === user.name && credentials?.password === user.password){
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
}