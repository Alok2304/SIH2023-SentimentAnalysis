"use client";
import TailCard from "./Tail_card"; 
import TryCard from "./TryCard";  
import data from "./data"; 
import { useState } from "react";
import head from "next/head"
import Link from "next/link"; 


export default function Index(){ 

    const sty = {
        backgroundImage: "url('https://source.unsplash.com/random/240x320')",
    }


    const [query, setQuery] = useState('');
    const [DATA, setDATA] = useState(data); 

    //Our search filter function
    const searchFilter = (array) => {
        return array.filter(
            (el) => el.name.toLowerCase().includes(query)
        )
    }

    const filtered = searchFilter(DATA)

    const handleChange = (e) => { 
        console.log(e); 
        setQuery(e.target.value)
    }


    return (

        <>
            <div>

                <div class="flex flex-col p-2 py-6 m-h-screen">

                    <div class="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-5 sticky" style={{top: "5px"}}>

                        <div>

                            <div class="p-2 mr-1 rounded-full hover:bg-gray-100 cursor-pointer">

                                <svg class="h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                                </svg>

                            </div>

                        </div>


                        <input class="font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-3xl" type="text"  onChange={handleChange} placeholder='Search...'/>

                            <div class="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full">

                                <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>

                            </div>
                        
                        <div className="font-bold rounded-full w-15 py-4 pl-2 pr-2 mr-3 text-gray-700 bg-gray-100 text-3xl">
                            <button>About</button> 
                        </div>

                        <div className="font-bold rounded-full w-15 py-4 pl-2 pr-2 mr-3 text-gray-700 bg-gray-100 text-3xl">
                            <button>Contact</button>  
                        </div>

                    </div>
                        
                </div>
                
            </div>
            
            {/* <div className='w-11/12 m-auto mt-40 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 md:gap-0'>
                <input onChange={handleChange} type='text' placeholder='Search...' className="form-control"/>
            </div> */}


            <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 dark:text-gray-100">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
                    {/* <TailCard />
                    <TailCard />
                    <TailCard /> */} 
                    {filtered.map((det) => (
                        <div key={det.id} className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500 rounded-3xl" style={{backgroundImage: det.bg}} href="#">
                            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                                <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-3xl font-semibold tracki uppercase dark:text-gray-100 bgundefined">{det.name}</a>
                                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                                    {/* <span className="text-3xl font-semibold leadi tracki">04</span>
                                    <span className="leadi uppercase">Aug</span> */}
                                </div>
                            </div>
                            <h2 className="z-10 p-5">
                                <Link rel="noopener noreferrer" href="/specific" state={{data: det}} className="font-medium text-3xl hover:underline text-gray-900 hover:text-gray-500">Check out </Link>
                            </h2>
                        </div>
                    ))}
                </div>
            </div> 
        </>
    ); 
}

