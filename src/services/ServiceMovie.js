import { api_key, url, lang } from "../const";

const getListMovie = (typeMovie, page) => {
    return fetch(
        //url + '/movie/'+ typeMovie+'?api_key='+ api_key+'&language=' + lang.vi + '&page=' + page, 
        `${url}/movie/${typeMovie}?api_key=${api_key}&language=${lang.vi}&page=${page}`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }
    )
}

const getDetailMovie = (movie_id) => {
    return fetch(`${url}/movie/${movie_id}?api_key=${api_key}&language=${lang.en}&append_to_response=1`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            }
        }
    )
}

const getReview = (movie_id,page) =>{
    return fetch(
        `${url}/movie/${movie_id}/reviews?api_key=${api_key}&language=${lang.en}&page=${page}`,
        {
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-type':'application/json'
            }
        }
    )
}

const getRecommendation = (movie_id , page) =>{
    return fetch(
        `${url}/movie/${movie_id}/similar?api_key=${api_key}&language=${lang.en}&page=${page}`,
        {
            method:'GET',
            headers:{
                Accept:'application/json',
                'Content-type':'application/json'
            }
        }
    )
}

export {
    getReview,
    getListMovie,
    getDetailMovie,
    getRecommendation
}