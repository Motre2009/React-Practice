function ShowFavoriteMovie({ name, director, years, studio, poster, genre }) {
    return (
        <div className="card">
            <img src={poster} alt={name} />
            <h2 className="card_title">{name}</h2>
            <div className="card_info">
                <span>Director:</span>
                <p>{director}</p>
                <span>Release Year:</span>
                <p>{years}</p>
                <span>Studio</span>
                <p>{studio}</p>
                <span>Genre:</span>
                <p>{genre}</p>
            </div>
        </div>
    )
}

export default function FavoriteMovie() {
    return (
        <>
            <ShowFavoriteMovie
                name="Home Alone"
                director="Chris Columbus"
                years={1990}
                studio="20th Century Fox"
                poster="https://image.tmdb.org/t/p/original/onTSipZ8R3bliBdKfPtsDuHTdlL.jpg"
                genre="Comedy"
            />
        </>
    )
}
