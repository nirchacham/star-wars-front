import {configureStore} from '@reduxjs/toolkit'
import favoriteMoviesSlice from './favoriteMovies/favoriteMoviesSlice';
import authSlice from './auth/authSlice';

// const initialMoviesState:{favoriteMovies:string[]} = {favoriteMovies: []};

// const favoriteMoviesSlice = createSlice({
//     name: 'favoriteMovies',
//     initialState:initialMoviesState,
//     reducers: {
//         addMovieToFavorites(state, action) {
//             state.favoriteMovies.push(action.payload)
//         },
//         removeMovieFromFavorites(state,action) {state.favoriteMovies=action.payload},
//         fetchFavoriteMovies(state,action) {state.favoriteMovies=action.payload}
//     }
// })

// const initialAuthState:{userEmail:string|null} = {userEmail: null};


// const authSlice = createSlice({
//     name:'authentication',
//     initialState:initialAuthState,
//     reducers: {
//         login(state,action) {state.userEmail = action.payload},
//     }
// })
const store = configureStore({
    reducer: {
        favoriteSlice: favoriteMoviesSlice.reducer,
        authSlice: authSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export const favoriteMoviesActions = favoriteMoviesSlice.actions;
export const authActions = authSlice.actions;
export default store;