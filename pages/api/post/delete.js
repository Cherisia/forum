import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export default async function Delete(req, resp) {
    if (req.method === 'DELETE') {
        // JSON 으로 보냈는데 req.body가 object로 들어옴...(??)
        let session = await getServerSession(req, resp, authOptions);
        if (session === null || session.user.email !== req.body.author) {
            return resp.status(401).json('Unauthorized');
        }
        try {
            const db = (await connectDB).db('forum');
            let result = await db.collection('post').deleteOne({_id: new ObjectId(req.body._id)});
            resp.status(200).json('success');
        } catch (e) {
            return resp.status(500).json('Internal Server Error');
        }
    } else {
        return resp.status(405).json('Method Not Allowed');
    }
}