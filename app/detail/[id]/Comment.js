'use client'

import {useEffect, useState} from "react";

export default function Comment({id}) {
    let [comment, setComment] = useState('');
    let [commentList, setCommentList] = useState([]);

    /* 데이터 요청 */
    useEffect(() => {
        fetch(`/api/comment/list?id=${id}`
        ).then((response) => {
            if (response.status === 200) {

            } else {

            }
            return response.json();
        }).then((r) => {
            setCommentList(r);
        })
    }, []);
    /* [] 안넣어주면 렌더링 할때마다 useEffect 실행됨. 렌더 이후 한번만 실행되도록 함 */
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
                        return r.json();
                    } else {

                    }
                }).then((response) => {
                    // console.log('response : ' + response);
                    setCommentList(response);
                })
            }}>댓글전송
            </button>
            {
                commentList.length > 0 ?
                commentList.map((item, index) => {
                    return (
                        <div key={index}>
                            <p><span>댓글 작성자 : </span><span>{item.author}</span></p>
                            <p><span>댓글 내용 : </span><span>{item.content}</span></p>
                        </div>
                    )
                })
                    : <div>댓글없음</div>
            }
        </div>
    )
}