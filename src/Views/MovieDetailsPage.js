import React, {Component} from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import * as movieApi from '../Servise/movies-api';
import s from "./MoviesDetailsPage.module.css";

import Cast from "../Components/Cast/Cast"
import Reviews from '../Components/Reviews/Reviews'
import routes from "../routes"

class MovieDetailsPage extends Component {
    state = {
        id: null,
        title: null,
        poster_path: null,
        vote_average: null,
        overview: null,
        release_date: null,
        genres: [],
    }
    componentDidMount() {
        movieApi.getMovieDetails(this.props.match.params.moviesId)
            .then(data => this.setState({ ...data }))
    }

    handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home );
    }
   
    render() {
        
    const {
      id,
      title,
      poster_path,
      vote_average,
      overview,
      release_date,
      genres,} = this.state;

        return (<>
            <button className={s.button} type="button" onClick={this.handleGoBack}>GO BACK</button>
            <div className={s.Wrapper}>
                <div className={s.Photo}>
                {!!poster_path && (
                <img className={s.Img}
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
             alt={title} />
                )}
            <div className={s.FilmInfo}>
                <h1>{title}({release_date})</h1>
            <p>User score: {vote_average} </p>
            <p>Overview : {overview}</p>
            <p>Genres:</p>
            <ul>
                {genres && genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
            ))}
                    </ul>
                    </div>
                </div>

            <p>Additional information</p>
                <ul>

        {/* Не працює вкладена навігація, не розумію, що роблю не так             */}
          <NavLink to={`/movies/${id}/cast`}>
            <li className={s.addInfo}>Cast</li>
          </NavLink>
          <NavLink to={`/movies/${id}/reviews`}>
            <li className={s.addInfo}>Reviews</li>
          </NavLink>
        </ul>
        <Switch>
          <Route path={'/movies/:movieId/cast'} component={Cast} />
          <Route path={'/movies/:movieId/reviews'} component={Reviews} />
        </Switch>
            </div>
        </>
            
        )
    }

}
export default MovieDetailsPage