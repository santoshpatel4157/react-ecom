import { useState } from "react"
import { Card } from "./Card";
import { data } from "./data";

export const Body = () =>{

    const [searchTxt, setSearchTxt] =useState("");
    const [allMovies,setAllMovies] = useState(data);
    //  console.log(allMovies)
    //const [filterMovie , setFilterMovie] = useState(data)
    function filterData(searchTxt , allMovies){
        // console.log(allMovies)
        const filterData1 = allMovies.filter((movies)=>
        movies?.Title?.toLowerCase()?.includes(searchTxt.toLowerCase()))
        return filterData1;
       
    }
    
    return (
        <>
        <input type="text" placeholder="search" value={searchTxt} onChange={(e)=>setSearchTxt(e.target.value)}/>
    <button onClick={()=>{const data = filterData(searchTxt,allMovies); setAllMovies(data)}} >search</button>
    {/* {console.log(allMovies)} */}
    <div className="card-list">
            {
                allMovies.map((movies )=>{
                    
                    return <Card {...movies}  key={movies.imdbID}/>
                })
            }
    </div>
   

        </>
        
    )
} 