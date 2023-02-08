import { TextField } from '@material-ui/core';
import * as React from 'react';
import { IMovie } from '../../../interfaces/Movie.interface';
import { IMoviesList } from '../../../interfaces/MovieList.interface';
import Card from '../../UI/Card';
import Movie from '../MovieItem/Movie';
import classes from './MoviesList.module.css';

const MovieList = (props:IMoviesList) => {
  const [filteredText,setFilterText] = React.useState('');
  const [filteredMovies,setFilteredMovies] = React.useState<IMovie[]>(props.movies);

  React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleFilter();
    }, 1500)

    return () => clearTimeout(delayDebounceFn)
  }, [filteredText])

  const handleFilter = () => {
    const filteredMovies: any = props.movies.filter((movie)=>{
      return movie.title.toLowerCase().includes(filteredText)
    })
    setFilteredMovies(filteredMovies);
  }

  return (
    <section>
      <Card>
        <div style={{}}>
          <TextField id="filled-basic" label="Filter" variant="outlined" onChange={(e)=>setFilterText(e.target.value)}/>
        </div>
        <ul className={classes['movies-list']}>
        {filteredMovies.map((movie:IMovie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
          />
        ))}
      </ul>
      </Card>
    </section>
  );
};

export default MovieList;
