const Shimmer = () => {
    return <div className="movie-card">{Array(20).fill("").map(()=>(<div className="shimmer-card"></div>))}</div>
        
}
 
export default Shimmer;