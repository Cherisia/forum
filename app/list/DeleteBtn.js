'use client'

export default function DeleteBtn({item}) {
    return (
        <span onClick={(e) => {
            fetch('/api/post/delete', {
                method: 'DELETE',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json",
                }
                // redirect: 'follow'
            }).then((r) => {
                if (r.status === 200) {
                    return r;

                } else {

                }

            }).then((response) => {
                // console.log(response);
                if (response.status === 200) {
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                        // e.target.parentElement.style.display = 'none';
                        window.location.reload();
                    }, 1000);
                } else {
                    alert('삭제 실패');
                }
            });
        }}>🗑️삭제🗑</span>
    )
}