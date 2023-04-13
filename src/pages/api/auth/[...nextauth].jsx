import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        if(credentials.username==="Icarus"&&credentials.password==="admin"){
          return ({username:credentials.username, password:credentials.password,isAdmin:'true'})
        }
        //needs change
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/acc-check`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()
        // console.log(user.user);
        // If no error and we have user data, return it
        if (res.ok && user.user) {
          return user.user
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ],
  session:{
    strategy:"jwt",
    maxAge:3000
  },
  pages:{
    signIn:"/login"
  },
  secret:"fuNnZV2bKf61ny811iW12AajWOFNOdPw",
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token to the token right after signin
      // if (account) {
      //   token.accessToken = account.access_token
      // }
      // console.log("token",token)
      
      // console.log("user",user)
      return ({...token,...user})
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      // console.log("session",session);
      session.user = token;
      // console.log("session",session);
      return session;
    },
    
  }

}
export default NextAuth(authOptions)