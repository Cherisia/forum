import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import {connectDB} from "@/util/database";
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: 'Ov23liLBuC4Mx4HmUCk0',
            clientSecret: '878d7862d9b0481297c925b642ecf6edd1ccddf9'
        }),
        // ...add more providers here
    ],
    secret: 'asdff12effe1f3223f23f',
    /* 디폴트는 JWT 이고, 세션방식으로 동작하려면 아래 설정 추가 */
    adapter: MongoDBAdapter(connectDB)
}
export default NextAuth(authOptions)