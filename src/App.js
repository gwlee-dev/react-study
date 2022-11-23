import { useEffect } from "react";
import { useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
        console.log(movies);
    };

    useEffect(() => getMovies, []);
    return (
        <div className="container mt-3">
            {loading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <ul className="list-group">
                    {movies.map((movie) => (
                        <li key={movie.id} className="list-group-item">
                            <div className="row align-items-center">
                                <div className="col-2">
                                    <img
                                        src={movie.medium_cover_image}
                                        alt="poster"
                                        className="w-100"
                                    ></img>
                                </div>
                                <div className="col-10">
                                    <span className="fw-bold">
                                        {movie.title}
                                    </span>
                                    {movie.genres.map((genre) => (
                                        <span
                                            key={genre}
                                            className="badge bg-secondary ms-2"
                                        >
                                            {genre}
                                        </span>
                                    ))}
                                    <p className="mb-0">{movie.summary}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;
