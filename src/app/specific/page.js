"use client"; 
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'


export default function Index(){ 

    const searchParams = useSearchParams()

    return (
        <>
            <h1 >{searchParams.get('name')}</h1>   
            <h2>Here is all the divs</h2> 
            <Link href="/">Click here</Link>
        </>
    )
}

