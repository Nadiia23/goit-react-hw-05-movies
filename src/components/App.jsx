import { Header } from 'components/Header/Header';
import { HomePage } from 'pages/HomePage/HomePage';
import { Movies } from 'pages/Movies/Movies';
import { MoviesDetails } from 'pages/MoviesDetails/MoviesDetails';
import { Routes, Route } from 'react-router-dom';
import { Cast } from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews /Reviews';


export const App = () => {

  return (
    <div>
      <Header/>
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:movieId' element={<MoviesDetails />}>
          <Route path='/movies/:movieId/cast' element={<Cast />} />
          <Route path='/movies/:movieId/reviews' element={<Reviews />} />
        </Route>
        </Routes>
    </div>
  );
};
