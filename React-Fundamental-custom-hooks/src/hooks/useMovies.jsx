import {useEffect, useState} from "react";
import {getMovies} from '../utils/api'



const useMovies = () => {

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(()=> {
         getMovies().then((movies)=> {
            setMovies(movies);
            setLoading(false);
         });

         return () => {
            setLoading(true)
         };

    }, []);

    return [movies, loading];

}


export default useMovies;