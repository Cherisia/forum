import {connectDB} from "@/util/database";
import Link from "next/link";
import DataLink from "@/app/detail/[id]/DetailLink";

export default async function List() {
    const db = (await connectDB).db('forum');
    let result = await db.collection('post').find().toArray();
    // console.log(result);
    return (
        <div className="list-bg">
            {
                result.map((item, i) =>
                    <div className="list-item" key={i}>
                        <Link prefetch={false} href={`/detail/${item._id}`} className="title">{item.title}</Link>
                        <Link prefetch={false} href={`/detail/${item._id}`} className="content">{item.content}</Link>
                        {/*<DataLink/>*/}
                        <Link href={`/edit/${item._id}`}>✏수정✏</Link>
                    </div>
                )
            }
        </div>
    )
}