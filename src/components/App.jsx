import { Header } from 'components/Header/Header';
import { HomePage } from 'pages/HomePage/HomePage';
import { Movies } from 'pages/Movies/Movies';
import { MoviesDetails } from 'pages/MoviesDetails/MoviesDetails';
import { Routes, Route } from 'react-router-dom';
import { Cast } from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews /Reviews';
import {  Suspense } from 'react';

// const Homepage = lazy(() => import('pages/HomePage/HomePage'));
// const Movies = lazy(() => import('pages/Movies/Movies'));
// const MovieDetailsPage = lazy(() => import('pages/MoviesDetails/MoviesDetails'));
// const Cast = lazy(() => import('pages/Cast/Cast'));
// const Reviews = lazy(() => import('pages/Reviews /Reviews'));


export const App = () => {

  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:movieId' element={<MoviesDetails />}>
          <Route path='/movies/:movieId/cast' element={<Cast />} />
          <Route path='/movies/:movieId/reviews' element={<Reviews />} />
        </Route>
        </Routes>
        </Suspense>
    </div>
  );
};
