import {connectDB} from "@/util/database";

export default async function New(req, resp) {
    const db = (await connectDB).db('forum');
    let result = await db.collection('post').insertOne(req.body)
    if (req.method === 'POST') {
        // console.log(result);
        resp.redirect(302, '/list');
    } else {
        resp.status(400).json('400 Bad Request');
    }
}