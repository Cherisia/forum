import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";

export default async function Delete(req, resp) {

    if (req.method === 'POST') {
        try {
            const db = (await connectDB).db('forum');
            let result = await db.collection('post').deleteOne({_id: new ObjectId(req.body)});
            return resp.status(200);
        } catch (e) {
            return resp.status(500).json('Internal Server Error');
        }
    } else {
        return resp.status(400).json('Bad Request');
    }
}