import React from 'react';
import {Movie} from "../common/modules";
import MovieCard from "./MovieCard";

interface MovieListProps {
    movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({movies}) => {
    return (
        <div className="d-flex flex-wrap gap-3">
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie}/>
            ))}
        </div>
    );
};

export default MovieList;