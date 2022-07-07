import axios from 'axios'

//chave: da00fdb9a2a3618f3d3b7a84842cbb89
//URL BASE: https://api.themoviedb.org/3/
//URL API: https://api.themoviedb.org/3/movie/now_playing?api_key=da00fdb9a2a3618f3d3b7a84842cbb89

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api