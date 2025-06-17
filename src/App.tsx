import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import {useMovies} from "./hooks/useMovies";

function App() {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const {movies, loading, error} = useMovies(searchTerm);

    return (
        <div className="container mt-4">
            <h1 className="mb-4">🎬 FilmFinder</h1>
            <SearchBar onSearch={setSearchTerm}/>

            {loading && <p>Lade Filme...</p>}
            {error && <div className="alert alert-danger">{error}</div>}

            {!loading && !error && movies.length > 0 && (
                <MovieList movies={movies}/>
            )}
        </div>
    );
}

export default App;
