import {connectDB} from "@/util/database";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export default async function New(req, resp) {

    let session = await getServerSession(req, resp, authOptions);
    if (session) {
        req.body.author = session.user.email
    }

    if (req.method === 'POST') {
        // console.log(result);
        if (req.body.title === '' || req.body.content === '') {
            return resp.status(400).json('입력안한거있음');
        }
        try {
            const db = (await connectDB).db('forum');
            let result = await db.collection('post').insertOne(req.body)
        } catch (error) {
            return resp.status(500).json('Server Error');
        }
        return resp.redirect(302, '/list');
    } else {
        return resp.status(400).json('400 Bad Request');
    }
}