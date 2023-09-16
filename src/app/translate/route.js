import { rejects } from "assert";
import { exec } from "child_process"; 
import { NextResponse } from "next/server"; 

export async function POST(request){ 

    const {text} = await request.json(); 
    const translatedTextPromise = new Promise((resolve, rejects) => {

        exec(`virenv\\Scripts\\activate && python translate.py ${text}`, (error, stdout, stderr) => { 
            if(error){
                console.error(error);  
                rejects(error); 
            }
            resolve(stdout); 
        });

    }); 

    const translatedText = await translatedTextPromise; 

    // exec(`virenv\Scripts\activate && python translate.py ${text}`, (error, stdout, stderr) => { 
    //     if(error){
    //         console.error(error); 
    //         return; 
    //     }
    //     translateText = stdout; 
    // }); 

    return NextResponse.json({ translatedText }); 
}

