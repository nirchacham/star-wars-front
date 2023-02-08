import {createSlice} from '@reduxjs/toolkit'
const initialMoviesState:{favoriteMovies:string[]} = {favoriteMovies: []};

const favoriteMoviesSlice = createSlice({
    name: 'favoriteMovies',
    initialState:initialMoviesState,
    reducers: {
        addMovieToFavorites(state, action) {
            state.favoriteMovies.push(action.payload)
        },
        removeMovieFromFavorites(state,action) {state.favoriteMovies=action.payload},
        fetchFavoriteMovies(state,action) {state.favoriteMovies=action.payload}
    }
})

export default favoriteMoviesSlice;