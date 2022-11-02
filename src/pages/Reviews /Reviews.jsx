import { getMoviesReviews } from 'helpers/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './reviews.module.css';

export function Reviews() {
  const [review, setReview] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const getReview = async () => {
      const data = await getMoviesReviews(movieId);
      console.log(data.results);
      setReview(data.results);
    };
    getReview();
  }, [movieId]);

  return (
    <ul className={s.reviewsList}>
      {review?.map(item => (
        <li key={item.id} className={s.reviewsListItem}>
          <p className={s.author}>Author: {item.author}</p>
          <p className={s.reviewsContent}>{item.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default Reviews;