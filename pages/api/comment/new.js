import {connectDB} from "@/util/database";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {ObjectId} from "mongodb";

export default async function New(req, resp) {
    if (req.method === 'POST') {
        try {
            let session = await getServerSession(req, resp, authOptions);
            if (session === null || session.user.email === null) {
                return resp.status(401).json('Unauthorized');
            } else {
                let comment = JSON.parse(req.body);
                comment.author = session.user.email;
                comment.parent = new ObjectId(comment.parent);
                // console.log(comment);
                const db = (await connectDB).db('forum');
                let result = await db.collection('comment').insertOne(comment);
                // console.log(result);
                let commentList = await db.collection('comment').find({parent: comment.parent}).toArray();
                // console.log(commentList)
                return resp.status(200).json(commentList);
            }
        } catch (e) {
            return resp.status(500).json('Internal Server Error');
        }
    } else {
        return resp.status(405).json('Method Not Allowed');
    }
}