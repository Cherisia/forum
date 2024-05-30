import {connectDB} from "@/util/database";

export default async function New(req, resp) {

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