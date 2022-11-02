import React from 'react';
import { useState, useEffect } from 'react';
import { getMoviesByQuery } from 'helpers/api';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import s from './movies.module.css';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movie, setMovie] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const location = useLocation();
  let query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      const data = await getMoviesByQuery({ query });
      setMovie(data.results);
    };
    getData();
  }, [query]);

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchValue });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <input
          onChange={handleChange}
          className={s.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit" className={s.searchFormButton}>
          Search
        </button>
      </form>
      {movie && (
        <ul className={s.searchList}>
          {movie?.map(item => (
            <li key={item.id} className={s.searchListItem}>
              <Link
                state={{ from: location }}
                to={`${item.id}`}
                id={item.id}
                className={s.searchListLink}
              >
                {item.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Movies;
