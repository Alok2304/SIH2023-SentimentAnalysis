"use client";
import { exec, spawn, fork } from "child_process"; 
import Image from 'next/image'
import App from "../components/app"; 
import Try from "../components/Try";  
import Userinputs from "../components/Userinputs";  

// exec("echo Hello there!!!!!", (err, stdout, stderr) => {
//   if(err){
//     console.error(`exec error: ${err}`); 
//     return; 
//   }
//   console.log(`stdout: ${stdout}`); 
//   console.log(`stderr: ${stderr}`); 
// }); 



export default function Home() {
  return (
    <> 
      <h1 className='mb-5'>
        <span>Your Products</span>
      </h1>
      <Try />    
      {/* <Userinputs />  */}
      {/* <AnalysisPage />  */}
    </>
  )
}
