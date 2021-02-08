import React, { Component } from 'react';
import * as movieApi from '../../Servise/movies-api';
import s from './Cast.module.css';

export default class Cast extends Component{
    state = {
        credits: {
            crew: [],
            cast: []
    }}

    componentDidMount() {
        movieApi
      .getMovieCredits(this.props.match.params.movieId)
           .then(data => {this.setState({credits: data})})
           .catch(error => {
        this.setState({ error });
      });
  };
      
    

    render() {
        const { credits } = this.state;
      
        return (<div>
            <h2 className={s.title}>Cast</h2>
            <ul className={s.castList}>
                {credits && credits.cast &&
                    credits.cast.map(credit => (
                        <li key={credit.credit_id} className={s.castItem}>
                            {credit.profile_path && (
                                <img className={s.castImg} src={`https://image.tmdb.org/t/p/w500/${credit.profile_path}`} alt={credit.name} />
                            )}
                            <p>{credit.name}</p>
                            <p>Character: {credit.character}</p>
                        </li>
                 ))
                }
            </ul>
            <h2 className={s.title}>Crew</h2>
            <ul  className={s.castList}>
                {credits && credits.crew &&
                    credits.crew.map(el => (
                        <li key={el.credit_id} className={s.castItem}>
                            {el.profile_path && (
                                <img className={s.castImg} src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`} alt={el.name} />
                            )}
                            <p>{el.name}</p>
                            <p>Job:{el.job}</p>
                        </li>
                    ))}
            </ul>
        </div>  
        );
 }
}