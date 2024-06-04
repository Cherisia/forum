import {connectDB} from "@/util/database";
import bcrypt from "bcrypt";

export default async function signup(req, resp) {
    if (req.method === 'POST') {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const db = (await connectDB).db('forum');
            let result = await db.collection('user_cred').insertOne(req.body);
            resp.status(200).json('가입성공');
        } catch (e) {
            // ignore
        }
    }
}