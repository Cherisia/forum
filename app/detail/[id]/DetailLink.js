'use client'

import {useParams, usePathname, useRouter, useSearchParams} from "next/navigation";

export default function DetailLink() {
    let router = useRouter();
    // console.log(usePathname());
    // console.log(useSearchParams());
    // console.log(useParams())
    return (
        <button onClick={() => {
            router.push('/')
            // router.back()
            // router.forward()
            // router.refresh()
            // router.prefetch('/detail') 다음페이지 미리 로드 (Link태그에 내장된 기능)
        }}>버튼</button>
    )
}