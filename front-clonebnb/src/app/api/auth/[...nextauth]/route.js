import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials, req) {
      
        const url = 'https://c14-04-m-node-react-production.up.railway.app/api/v1/visitor/loginVisitor'
          const res = await fetch(url,  {
            method: 'POST',
            body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password
            }),
            headers: {
               'Content-Type': 'application/json'
            },
          })
 

          //const user = {id: '1', name: 'noel', email: 'noel@example.com'}
          const user = await res.json()

          console.log(user)
          
          if (user.error) {
            throw new Error(user)
          }else{
            return user
          }
          
       

    
      },
    }),
  ],


  
  pages: {
    signIn: '/login',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }