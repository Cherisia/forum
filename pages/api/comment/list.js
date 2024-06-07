import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";

export default async function list(req, resp) {
    if (req.method === 'GET') {
        // console.log('req.query : ' + req.query.id);
        const db = (await connectDB).db('forum');
        let result = await db.collection('comment').find({parent : new ObjectId(req.query.id)}).toArray();
        // console.log(result);
        return resp.status(200).json(result);
    }
}