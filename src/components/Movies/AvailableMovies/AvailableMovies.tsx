import { CircularProgress } from "@material-ui/core";
import { useState, useCallback, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import MoviesList from "../MoviesList/MoviesList";
import {favoriteMoviesActions} from '../../../store/index';
import ServiceHandler from "../../services/ServiceHandler";


const AvailableMovies = () => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [content, setContent] = useState(<p>Found no movies.</p>);
  const userEmail = useSelector((state:RootState)=>state.authSlice.userEmail)

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await ServiceHandler.fetchMovies();
      let favoriteMovies;
      if(userEmail){
         favoriteMovies = await ServiceHandler.fetchUserFavoriteMovies(userEmail);
      }
      if(favoriteMovies && favoriteMovies.data && favoriteMovies.data.length>0){
        dispatch(favoriteMoviesActions.fetchFavoriteMovies(favoriteMovies.data));
      } 
      setMovies(response.data);
    } catch (error:any) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  useEffect(()=>{
    if (movies.length > 0) {
      setContent(<MoviesList movies={movies} />);
    }
  
    if (error) {
      setContent(<p>{error}</p>);
    }
  
    if (isLoading) {
      setContent(<CircularProgress />);
    }
  },[movies,error,isLoading])

  return (
    <Fragment>
      <section>
        {content}
      </section>
    </Fragment>
  )
}

export default AvailableMovies;