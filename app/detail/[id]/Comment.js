'use client'

import {useState} from "react";

export default function Comment({id}) {
    let [comment, setComment] = useState('');
    return (
        <div>
            <div>댓글목록</div>
            <input onChange={(e) => {
                setComment(e.target.value);
            }}/>
            <button onClick={() => {
                fetch('/api/comment/new', {
                    method: 'POST',
                    body: JSON.stringify({
                        content: comment,
                        parent: id
                    })
                }).then((r) => {
                    if (r.status === 200) {

                    } else {

                    }
                    return r.json();
                }).then((response) => {
                    console.log('response : ' + response);
                })
            }}>댓글전송
            </button>
        </div>
    )
}