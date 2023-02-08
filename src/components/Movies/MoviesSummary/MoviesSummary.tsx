import classes from './MoviesSummary.module.css';

const MoviesSummary = () => {
    return (
      <section className={classes.summary}>
        <h2>Star wars</h2>
        <p>
          This is a demo app which you can see the following Star Wars movies.
        </p>
        <p>
          You can filter through the movies, add movies to your Favorites on top, and remove 
          them by clicking on the Favorites button and clicking the delete button.
        </p>
      </section>
    );
  };
  
  export default MoviesSummary;