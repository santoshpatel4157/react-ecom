import { useState } from "react"

export const Body = () =>{

    const [search, setSearch] =useState("");
    
    
    return (
        <>
        <input type="text" placeholder="search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
    <button >search</button>

        </>
        
    )
} 