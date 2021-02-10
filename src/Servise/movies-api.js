const API_KEY = 'db995ade44f92dc9709a14e19f976d19';
const BASE_URl = 'https://api.themoviedb.org/3';

// для фільмів тижня
export const getTrendingMovies = () => {
    return fetch(
        `${BASE_URl}/trending/movie/week?api_key=${API_KEY}`
    ).then(response => {
        return response.json();
    }).then(data =>data.results);
}

// для пошуку фільму
export const searchMovies = (query) => {
  return fetch(
    `${BASE_URl}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  )
    .then(res => res.json())
    .then(data => data);
};

// для фільму
export const getMovieDetails = id => {
  return fetch(
    `${BASE_URl}/movie/${id}?api_key=${API_KEY}`,
  ).then(res => res.json());
};

export const getMovieCredits = id => {
  return fetch(
    `${BASE_URl}/movie/${id}/credits?api_key=${API_KEY}`,
  ).then(res => res.json());
};
export const getMovieReviews = id => {
  return fetch(
    `${BASE_URl}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  ).then(res => res.json());
};