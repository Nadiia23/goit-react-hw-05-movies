import { getTrending } from 'helpers/api';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './homePage.module.css';

export const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getTrending();
      setMovies(data);
    };
    getData();
  }, []);

  return (
    <>
      <h2 className={s.homeTitle}>Tranding Today</h2>
      <ul className={s.filmList}>
        {movies?.map(movie => (
          <li key={movie.id} className={s.filmListItem}>
            <img
              style={{ width: 200 }}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="poster"
              width="200"
            />
            <NavLink to={`/movies/${movie.id}`} className={s.filmLink}>
              <h3 className={s.filmTitle}>{movie.original_title}</h3>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
