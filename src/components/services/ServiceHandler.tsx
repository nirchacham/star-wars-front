import axios from 'axios';

export default class ServiceHandler {
    static prefix = 'https://star-wars-backend.vercel.app'
    //  'http://localhost:3001';
   
    static async fetchMovies() {
        return await axios.get(`${this.prefix}/star-wars/movies`);
    }

    static async fetchUserFavoriteMovies(userEmail:string) {
        return await axios.get(`${this.prefix}/star-wars/movies/favoriteMovies/${userEmail}`);
    }

    static async addFavoriteMovieToUser(emailId:string, movieTitle:string) {
        return await axios.post(`${this.prefix}/star-wars/movies/addMovieToFavorite/${emailId}`,null,{
            params: {
                movieTitle
            }
        })
    }

    static async login() {
         
    }

    static async deleteMovieFromUserFavorites (email:string,movieTitle:string) {
        return await axios.delete(`${this.prefix}/star-wars/movies/removeMovieFromFavorite/${email}`,{
            data: {title: movieTitle}
        })
    }
};

