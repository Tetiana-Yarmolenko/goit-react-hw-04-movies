import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as movieApi from '../Servise/movies-api';
import SearchBar from "../Components/SearchBar/SearchBar";

class MoviesView extends Component {
  state = {
    movieName: '',
    movies: []
  }
    handleFormSubmit = movieName => {
      this.setState({ movieName });
    }

  
  componentDidUpdate(prevProps, prevState) {
   
    if (prevState.movieName !== this.state.movieName) {
      movieApi.searchMovies(this.state.movieName)
        .then(data => 
           this.setState({
            movies: [...data.results]
          }));}
   }
  
  render() {
    const { movies } = this.state;
    const {location} = this.props

        return (<>
          <SearchBar onSubmit={this.handleFormSubmit} />
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
              <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: {
                from: location,
              },
                  }}>
              {movie.title}
              </Link>
            </li>
           ))}
          </ul>
      </>
    );
  }
}

export default withRouter( MoviesView)