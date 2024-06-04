import Link from "next/link";
import {redirect} from "next/navigation";
import DeleteBtn from "@/app/list/DeleteBtn";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export default async function ListItem(props) {
    let session = await getServerSession(authOptions);
    return (
        props.listItem.map((item, i) =>
            <div className="list-item" key={i}>
                <Link prefetch={false} href={`/detail/${item._id}`} className="title">{item.title}</Link>
                <Link prefetch={false} href={`/detail/${item._id}`} className="content">{item.content}</Link>
                {/*<DataLink/>*/}
                <Link href={`/edit/${item._id}`}>✏수정✏</Link>
                {
                    session !== null && session.user.email === item.author ? <DeleteBtn item={item}/> : ''
                }
            </div>
        )
    )
}