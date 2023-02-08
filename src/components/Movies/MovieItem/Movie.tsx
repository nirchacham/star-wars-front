import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {favoriteMoviesActions, RootState} from '../../../store/index';
import { IMovie } from '../../../interfaces/Movie.interface';
import classes from './MovieItem.module.css';
import ServiceHandler from '../../services/ServiceHandler';

const Movie = (props:IMovie) => {
    const dispatch = useDispatch();  
    const emailId = useSelector((state:RootState)=>state.authSlice.userEmail)
    const favoritesMovies = useSelector((state:RootState)=>state.favoriteSlice.favoriteMovies)

    const addMovieToFavorites = async (movieTitle:string) => {
        if(!favoritesMovies.includes(movieTitle)){
            dispatch(favoriteMoviesActions.addMovieToFavorites(movieTitle));          
            if(emailId) await ServiceHandler.addFavoriteMovieToUser(emailId,movieTitle);
        }
    }
  
    return (
        <li className={classes.movie}>
            <h2 className='movie'>{props.title}</h2>
            <h3 className='movie'>{props.releaseDate}</h3>
            <p>{props.openingText}</p>
            <Button style={{width:'25%', alignSelf:'center'}} onClick={()=>addMovieToFavorites(props.title)}>
                    Add to favorites
            </Button>
        </li>
    )
}

export default Movie;