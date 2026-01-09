const BASE_URL = 'https://api.themoviedb.org/3';

const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_READ_TOKEN}`
}

const options = {
    method: 'GET',
    headers: headers
};


export const getMovies = async ({ page=1, year }) => {
    let url = `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
    
    if(year){
        url += `&primary_release_year=${year}`;
    }
    
    const res = await fetch(url, options);

    if(!res.ok){
        throw new Error("Failed to fetch Movies");
    }

    const results = await res.json();
    
    return results;
};


export const getTrendingMovies = async () => {
    const res = await fetch(`${BASE_URL}/trending/movie/day?language=en-US`, options)

    if (!res.ok) {
        throw new Error("Failed to fetch trending movies");
    }

    const results = await res.json();

    return results;
};

export const getTopRatedMovies = async () => {
    const res = await fetch(`${BASE_URL}/movie/top_rated?language=en-US&page=1`, options);

    if(!res.ok){
        throw new Error("Failed to fetch top rated movies");
    }

    const results = await res.json();

    return results
};

export const getSeries = async ({ page=1, year }) => {
    let url = `${BASE_URL}/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`;
    
    if(year){
        url += `&first_air_date_year=${year}`
    }
    
    const res = await fetch(url, options);

    if(!res.ok){
        throw new Error("Failed to fetch series");
    }

    const results = await res.json();

    return results;
};

export const getTrendingSeries = async () => {
    const res = await fetch(`${BASE_URL}/trending/tv/day?language=en-US`, options);

    if(!res.ok){
        throw new Error("Failed to fetch trending series");
    }

    const results = await res.json();

    return results
};

export const getTopRatedSeries = async () => {
    const res = await fetch(`${BASE_URL}/tv/top_rated?language=en-US&page=1`, options);
    
    if(!res.ok){
        throw new Error("Failed to fetch top rated series");
    }
    
    const results = await res.json();

    return results;
};

export const getMovieGenres = async () => {
    const res = await fetch(`${BASE_URL}/genre/movie/list?language=en`, options);

    if(!res.ok){
        throw new Error("Failed to fetch movie genres");
    }

    const results = await res.json();
    
    return results;
};


export const getSerieGenres = async () => {
    const res = await fetch(`${BASE_URL}/genre/tv/list?language=en`, options);

    if(!res.ok){
        throw new Error("Failed to fetch serie genres");
    }

    const results = await res.json();

    return results;
};