import React, { useState, useEffect } from "react";
import { getMoviesCast } from '../../helpers/api';
import { useParams } from "react-router-dom";
import s from './cast.module.css';


const Cast = () => {
    const [castMovie, setMovieCast] = useState();
    const { movieId } = useParams();

    useEffect(() => {
        const getCastMovies = async () => {
            const data = await getMoviesCast(movieId);
            setMovieCast(data.cast);
        };
        getCastMovies();
    }, [movieId]);


        return (
    <>
      {castMovie && (
        <ul className={s.list}>
          {castMovie?.map(({ id, profile_path, name }) => (
            <li key={id} className={s.item}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg'
                }
                alt={name}
                width="100"
              />
              <p className={s.text}>{name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );

}

export default Cast;