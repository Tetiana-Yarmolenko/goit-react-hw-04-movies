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
    if (prevProps.movieName !== this.props.movieName) {
      this.setState({movies: []})
    }
   
    movieApi.searchMovies(this.state.movieName)
      .then(data => {
        if (data.results.length === 0) { 
          toast.error('Invalid request!');
          return;
        }
        this.setState({movies: [...data.results]})
      })
    .catch(error => {
        this.setState({ error });
      });
   }
  
  render() {
    const { movies } = this.state;
    const { location } = this.props;

    return (<>
          {/* додатковий пропс location */}
          <SearchBar location={location} onSubmit={this.handleFormSubmit} />
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