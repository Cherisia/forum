import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: 'Ov23liLBuC4Mx4HmUCk0',
            clientSecret: '878d7862d9b0481297c925b642ecf6edd1ccddf9'
        }),
        // ...add more providers here
    ],
    secret: 'asdff12effe1f3223f23f'
}
export default NextAuth(authOptions)