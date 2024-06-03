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
                <span onClick={(e) => {
                    fetch('/api/post/delete', {
                        method: 'DELETE',
                        body: item._id
                        // redirect: 'follow'
                    }).then((r) => {
                        if (r.status === 200) {
                            return r.json();
                        } else {

                        }

                    }).then((result) => {
                        e.target.parentElement.style.opacity = 0;
                        setTimeout(() => {
                            // e.target.parentElement.style.display = 'none';
                            window.location.reload();
                        }, 1000);
                    });
                }}>🗑️삭제🗑</span>
            </div>
        )
    )
}