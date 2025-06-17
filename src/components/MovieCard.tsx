import React from 'react';
import {Movie} from "../common/modules";

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({movie}) => {
    return (
        <div className="card mb-3" style={{width: "18rem"}}>
            <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"} className="card-img-top" alt={movie.Title}/>
            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Year}</p>
            </div>
        </div>
    );
};

export default MovieCard;
