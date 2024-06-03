import {connectDB} from "@/util/database";
import ListItem from "@/app/list/ListItem";

/* 캐싱 설정 예약변수 (초단위) */
export const revalidate = 60

/* 강제로 다이나믹 랜더링 설정 예약변수 */
export const dynamic = 'force-dynamic'

export default async function List() {
    const db = (await connectDB).db('forum');
    let result = await db.collection('post').find().toArray();
    // console.log(result);
    return (
        <div className="list-bg">
            <ListItem listItem={result}/>
        </div>
    )
}