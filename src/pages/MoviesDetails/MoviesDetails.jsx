import { getMoviesId } from 'helpers/api';
import { Suspense, useEffect, useState } from 'react';
import { NavLink, useParams, Outlet, useLocation } from 'react-router-dom';
import BackLink from "components/BackLink/BackLink";
import s from './moviesDetail.module.css';

const MoviesDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from || "/";

  useEffect(() => {
    if (!movieId) return;
    const getById = async () => {
      const data = await getMoviesId(movieId);

      setMovie(data);
      // console.log(data);
    };
    getById();
  }, [movieId]);

  return (
    <div className={s.description}>
      <BackLink to={backLinkHref}>Back to movie list</BackLink>
      <img
        className={s.imgDescription}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className={s.descriptionWrapText}>
        <h2 className={s.descriptionTitle}>
          {movie.original_title} {movie?.release_date?.slice(0, 4)}
        </h2>
        <p className={s.descriptionText}>
          User score: {Math.round(movie.vote_average * 10)}%
        </p>
        <h3 className={s.descriptionWrapTitle}>Overview</h3>
        <p className={s.descriptionText}>{movie.overview}</p>
        <h3 className={s.descriptionWrapTitle}>Genres:</h3>
        <ul className={s.genresList}>
          {movie?.genres?.map(gen => (
            <li key={gen.id}>{gen.name}</li>
          ))}
        </ul>
      </div>
      <p className={s.descriptionWrapTitle}>Additional informathion</p>
      <ul className={s.infoList}>
        <li>
          <NavLink to="cast" state={{ from: location?.state?.from }} className={({ isActive }) => (isActive ? s.active : s.infoLink)}>Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={{ from: location?.state?.from }} className={({ isActive }) => (isActive ? s.active : s.infoLink)}>Reviews</NavLink>
        </li>
      </ul>
      <Suspense>
         <Outlet />
     </Suspense>
    </div>
  );
};

export default MoviesDetails;