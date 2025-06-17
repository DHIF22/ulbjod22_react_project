import {useEffect, useState} from "react";
import {Movie} from "../common/modules";

const API_KEY = "http://www.omdbapi.com/?i=tt3896198&apikey=7dc684b4";

export function useMovies(searchTerm: string) {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!searchTerm || searchTerm.length < 3) {
            setMovies([]);
            return;
        }

        setLoading(true);
        setError(null);

        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.Response === "True") {
                    setMovies(data.Search);
                } else {
                    setError(data.Error || "Keine Filme gefunden.");
                    setMovies([]);
                }
            })
            .catch((err) => {
                console.error("Fehler beim Laden der Filme:", err);
                setError("Netzwerkfehler oder ungültige API.");
            })
            .finally(() => {
                setLoading(false);
            });

    }, [searchTerm]);

    return {movies, loading, error};
}
