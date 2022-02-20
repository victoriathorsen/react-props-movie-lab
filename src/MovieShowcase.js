import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
  
  generateMovieCards = (movieData) => {
    movieData.map(movie => <MovieCard attributes={movie}/>)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards(movieData)}
      </div>
    )
  }
}
