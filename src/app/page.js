"use client";
import Image from 'next/image'
import App from "../components/app"; 
import Try from "../components/Try"; 

export default function Home() {
  return (
    <> 
      <h1 className='mb-5'>
        <span>Your Products</span>
      </h1>
      <Try />  
    </>
  )
}
