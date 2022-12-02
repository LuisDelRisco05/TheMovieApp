import { useMoviesStore } from "./useMoviesStore"


export const useGenres = () => {

    const { youMayLike } = useMoviesStore();

    //* peliculas de accion
    const action = youMayLike.filter( act => (
        act.genre_ids?.includes(28) === true
    ))

    //* peliculas de comedia
    const comedy = youMayLike.filter( act => (
        act.genre_ids?.includes(35) === true
    ))

    //* peliculas de terror
    const horror = youMayLike.filter( act => (
        act.genre_ids?.includes(27) === true
    ))
    
    return {
        action,
        comedy,
        horror,
    }
    
    
}
