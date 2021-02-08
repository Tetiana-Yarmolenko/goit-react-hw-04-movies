import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieApi from '../Servise/movies-api';

class HomeView extends Component  {
    state = {
     trendingMovies: []
 }

    componentDidMount() {
    movieApi.getTrendingMovies().then(movies => {
      this.setState({
        trendingMovies: movies,
      });
    });
    }
    
    render() {
        const { trendingMovies } = this.state;
       
        return (<>
            <h1>Trending movies</h1>
            <ul>
                {trendingMovies.map(movie =>
                    <li key={movie.id}>
                        <Link
                             to={`/movies/${movie.id}`}>
                            {movie.title}
                        </Link>
                        </li>
                )}
            </ul>
        </>)
  }
}



export default HomeView


