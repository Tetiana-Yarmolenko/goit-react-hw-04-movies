import React from 'react';
import {  Route, Switch } from 'react-router-dom';

import './App.css';
import routes from '../routes';
import { ToastContainer } from 'react-toastify';
import Loader from 'react-loader-spinner';
// import HomeView from '../Views/HomeViews';
// import MoviesView from '../Views/MoviesPage';
// import MovieDetailsPage from '../Views/MovieDetailsPage';
// import NotFoundView from "../Views/NotFoundView";
// import AppBar from '../Components/AppBar/AppBar'
import { lazy, Suspense } from 'react';

const AppBar = lazy(() =>
  import('../Components/AppBar/AppBar' /* webpackChunkName: "app-bar" */),
);

const HomeView = lazy(() =>
  import('../Views/HomeViews' /* webpackChunkName: "home-view" */),
);

const MoviesView = lazy(() =>
  import('../Views/MoviesPage' /* webpackChunkName: "mvies-view" */),
);

const MovieDetailsPage = lazy(() =>
  import('../Views/MovieDetailsPage' /* webpackChunkName: "home-sub-view" */),
);

const NotFoundView = lazy(() =>
  import('../Views/NotFoundView' /* webpackChunkName: "not-found-view" */),
);

const App = () => {
  return (
    <>
      <Suspense
      fallback={
          <div style={{ textAlign: 'center', marginTop: '80px' }}>
            <Loader
              type="Circles"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </div>
        }>
        <AppBar />
      <ToastContainer autoClose={3000} />
    <Switch>
    <Route exact path={routes.home} component={HomeView} />
    <Route exact path={routes.movies} component={MoviesView} />
    <Route exact path='/movies/:moviesId' component={MovieDetailsPage} />
    <Route component={NotFoundView} />
    </Switch>
      </Suspense>
      
    
  </>
  )
}

export default App;
