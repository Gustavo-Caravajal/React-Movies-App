const BASE_URL = 'https://api.themoviedb.org/3';

const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_READ_TOKEN}`
}

const options = {
    method: 'GET',
    headers: headers
};

const ALLOWED_MEDIA_TYPES = ["movie", "tv"];

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

export const getTrendingMedia = async (mediaType="movie") => {
    if(!ALLOWED_MEDIA_TYPES.includes(mediaType)){
        throw new Error("Invalid media type. Use 'movie' or 'tv'");
    }
    
    const res = await fetch(`${BASE_URL}/trending/${mediaType}/day?language=en-US`, options)

    if (!res.ok) {
        throw new Error("Failed to fetch trending media");
    }

    const results = await res.json();

    return results;
};

export const getTopRatedMedia = async (mediaType="movie") => {
    if(!ALLOWED_MEDIA_TYPES.includes(mediaType)){
        throw new Error("Invalid media type. Use 'movie' or 'tv'");
    }
    const res = await fetch(`${BASE_URL}/${mediaType}/top_rated?language=en-US&page=1`, options);

    if(!res.ok){
        throw new Error("Failed to fetch top rated media");
    }

    const results = await res.json();

    return results
};

export const getMediaGenres = async (mediaType="movie") => {
    if(!ALLOWED_MEDIA_TYPES.includes(mediaType)){
        throw new Error("Invalid media type. Use 'movie' or 'tv'");
    }
    
    const res = await fetch(`${BASE_URL}/genre/${mediaType}/list?language=en`, options);

    if(!res.ok){
        throw new Error("Failed to fetch media genres");
    }

    const results = await res.json();
    
    return results;
};

export const getMediaVideos = async (mediaId, mediaType="movie") => {
    if(!ALLOWED_MEDIA_TYPES.includes(mediaType)){
        throw new Error("Invalid media type. Use 'movie' or 'tv'");
    }
    
    const res = await fetch(`${BASE_URL}/${mediaType}/${mediaId}/videos?language=en-US`, options);
    
    if(!res.ok){
        throw new Error("Failed to fetch media videos");
    }

    const results = await res.json();

    return results;
};

export const getMediaCredits = async (mediaId, mediaType="movie") => {
    if(!ALLOWED_MEDIA_TYPES.includes(mediaType)){
        throw new Error("Invalid media type. Use 'movie' or 'tv'");
    }
    
    const res = await fetch(`${BASE_URL}/${mediaType}/${mediaId}/credits?language=en-US`, options);

    if(!res.ok){
        throw new Error("Failed to fetch media credits");
    }

    const results = await res.json();

    return results;
};

export const getSimilarMedia = async (mediaId, mediaType="movie") => {
    if(!ALLOWED_MEDIA_TYPES.includes(mediaType)){
        throw new Error("Invalid media type. Use 'movie' or 'tv'");
    }

    const res = await fetch(`${BASE_URL}/${mediaType}/${mediaId}/similar?language=en-US&page=1`, options);

    if(!res.ok){
        throw new Error("Failed to fetch similar media");
    }

    const results = await res.json();

    return results;
}; 