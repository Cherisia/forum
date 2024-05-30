import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";

export default async function Edit(props) {
    // console.log(props.params.id)
    const db = (await connectDB).db('forum');
    let item = await db.collection('post').findOne({_id: new ObjectId(props.params.id)});
    console.log(item)
    return (
        <div>
            <h4>글수정</h4>
            <form action="/api/post/edit" method="POST">
                <input type="text" name="title" defaultValue={item.title}/>
                <input type="text" name="content" defaultValue={item.content}/>
                <input type="text" name="id" defaultValue={item._id.toString()} hidden={true}/>
                <button type="submit">수정</button>
            </form>
        </div>
    )
}