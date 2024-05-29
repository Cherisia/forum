import {connectDB} from "@/util/database";

export default async function List(req, resp) {
    const db = (await connectDB).db('forum');
    let result = await db.collection('post').find().toArray();
    if (req.method === 'GET') {
        resp.status(200).json(result);
    } else {
        resp.status(400).json('올바르지 않은 요청 메서드');
    }
}