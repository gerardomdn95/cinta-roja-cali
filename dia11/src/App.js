import React from 'react';
import { MoviesContainer } from './containers/MoviesContainer/MoviesContainer';
import MovieFormContainer from './containers/MovieFormContainer/MovieFormContainer';
import './App.scss';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />

      <MoviesContainer />
      <MovieFormContainer />
    </div>
  );
}

export default App;
