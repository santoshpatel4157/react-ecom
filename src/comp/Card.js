export const Card = ({imdbID,Title,Year,Poster}) => {
    return (
        <div className="card">
            <img src={Poster} alt="logo" />
            <h2>{imdbID}</h2>
            <h3>{Title}</h3>
            <h4>{Year}</h4>
            
        </div>
    )
}
