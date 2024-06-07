'use client'

export default function Error({error, reset}) {
    return (
        <div>
            <h4>에러</h4>
            <button onClick={() => {reset()}}>페이지 새로고침</button>
        </div>
    )
}