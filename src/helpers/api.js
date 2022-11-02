import axios from 'axios';

const getApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'c7319c856c6453f29ecfc93fd160b989'
    },
});

export const getTrending = async () => {
    const { data } = await getApi.get('/trending/movie/day');
    // console.log(data.results);
    return data.results;
};

export const getMoviesId = async id => { 
    const response = await getApi.get(`/movie/${id}`);
    // console.log(response.data);
    return response.data;
}

export const getMoviesByQuery = async params => {
  const { data } = await getApi.get('/search/movie', { params: params });
  return data;
};

// export const getMoviesCast= async id => { 
//     const response = await getApi.get(`/movie/${id}/credits`);
//     console.log(response.data);
//     return response.data;
// }


export const getMoviesCast = async id => {
  const { data } = await getApi.get(`/movie/${id}/credits`);
  return data;
};

export const getMoviesReviews = async id => {
    const { data } = await getApi.get(`/movie/${id}/reviews`);
    console.log(data);
  return data;
};
