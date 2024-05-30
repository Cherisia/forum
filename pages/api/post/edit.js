import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";

export default async function Edit(req, resp) {
    console.log(req.body)
    if (req.method === 'POST') {
        if (req.body.title === '' || req.body.content === '') {
            return resp.status(400).json('입력안한거있음');
        }
        try {
            const db = (await connectDB).db('forum');
            let result = await db.collection('post').updateOne(
                {_id: new ObjectId(req.body.id)},
                {
                    $set: {
                        title: req.body.title,
                        content: req.body.content
                    }
                }
            );
        } catch (error) {
            return resp.status(500).json('Server Error');
        }
        return resp.redirect(200, '/list');
    } else {
        return resp.status(400).json('400 Bad Request');
    }
}