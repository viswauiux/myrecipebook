import SignUp from "@models/signup";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

const authOptions = {
    providers:[
        CredentialsProvider({
            name:'credentials',
            credentials:{},
            async authorize(credentials){
               const{email,password} = credentials
               const user =await SignUp.findOne({email})
               if (!user) {
                return null
               }
               const passwordMatch = await bcrypt.compare(password,user.password)
               if(!password){
                return null
               }
               return user
            }
        })
    ],
    session: {
        jwt: true,
      },
    secret:process.env.NEXTAUTH_SECRET,
    page:{
        login:"/login"
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}