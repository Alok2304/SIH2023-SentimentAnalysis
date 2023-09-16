"use client"; 
import React , {useState} from "react"; 

export default function UserInputs(){
    const [text, setText] = useState(""); 
    const [translatedText, setTranslatedText] = useState(""); 

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const res = await fetch("/translate", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
            }, 
            body: JSON.stringify({ text }), 
        }); 
        const { translatedText } = await res.json(); 
        setTranslatedText(translatedText); 
        setText(""); 
    }; 

    return (
        <form 
            onSubmit={handleSubmit} 
            className="flex flex-col items-center justify-center h-screen" 
        >  
            <div className="flex items-center justify-center space-x-2"> 
                <input 
                    type="text" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    placeholder="Enter the text here..." 
                    className="bg-transparent border border-black rounded-lg px-2 py-1 text-black" 
                />     
                <button className="px-2 py-1 border text-black rounded-lg"> 
                    Translate 
                </button>
            </div> 
            {translatedText != "" && (
                <p className="mt-2 text-black border-black"> 
                    Translated text: {translatedText} 
                </p>
            )}
        </form>
    ); 

}; 

