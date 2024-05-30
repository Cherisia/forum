'use client'

import Link from "next/link";
import {redirect} from "next/navigation";

export default function ListItem(props) {
    return (
        props.listItem.map((item, i) =>
            <div className="list-item" key={i}>
                <Link prefetch={false} href={`/detail/${item._id}`} className="title">{item.title}</Link>
                <Link prefetch={false} href={`/detail/${item._id}`} className="content">{item.content}</Link>
                {/*<DataLink/>*/}
                <Link href={`/edit/${item._id}`}>✏수정✏</Link>
                <span onClick={() => {
                    fetch('/api/post/delete', {
                        method: 'POST',
                        body: item._id.toString()
                        // redirect: 'follow'
                    }).then(() => {
                        window.location.href = '/list';
                    });
                }}>🗑️삭제🗑</span>
            </div>
        )
    )
}