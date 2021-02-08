import React, { Component } from 'react';
import * as movieApi from '../../Servise/movies-api';
import s from './Reviews.module.css';

export default class Reviews extends Component{
    state = {
       reviews: []
    }

    componentDidMount() {
        movieApi.getMovieReviews(this.props.match.params.movieId)
            .then(data => {this.setState({reviews: data.results})})
        .catch(error => {
        this.setState({ error });
      });
    }

    render() {
        const { reviews } = this.state;
        console.log(reviews);
        return (<>
            {reviews.length > 0 ? (
                <ul>
                {reviews.map(el => (
              <li className={s.Item} key={el.id}>
              <p>Author: {el.author}</p>
              <p>{el.content}</p>
                   </li> 
                ))}
            </ul>
            ) : (
               <p>We do not have any reviews for this movie.</p>      
            )}
        </>)
    }
}

