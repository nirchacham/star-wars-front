import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Login from './components/Login/Login';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import MoviesSummary from './components/Movies/MoviesSummary/MoviesSummary';
import AvailableMovies from './components/Movies/AvailableMovies/AvailableMovies';

function App() {
  const isLoggedIn = useSelector((state:RootState)=> state.authSlice.userEmail);

  const renderContent = () => {
    return (isLoggedIn ?
     <div>
      <Header />
      <MoviesSummary />
      <AvailableMovies />
    </div> 
    : 
    <div>
      <Login />
    </div>
    )
  }
  
  return (
    <React.Fragment>
      {renderContent()}
    </React.Fragment>
  );
}

export default App;
