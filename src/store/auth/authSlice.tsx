import {createSlice} from '@reduxjs/toolkit'
const initialAuthState:{userEmail:string|null} = {userEmail: null};


const authSlice = createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers: {
        login(state,action) {state.userEmail = action.payload},
    }
})

export default authSlice;