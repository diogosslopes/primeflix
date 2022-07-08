import '../../src/App.css';
import api from '../services/api';
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Buttons from './Buttons';

function Movie() {

  const { id } = useParams()
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigate()

  const getMovie = async () => {
    await api.get(`/movie/${id}`, {
      params: {
        api_key: "da00fdb9a2a3618f3d3b7a84842cbb89",
        language: "pt-BR",
      }
    })
      .then((response) => {
        setMovie(response.data)
        setLoading(false)
      })
      .catch(() => {
        navigation("/", {replace: true})
      })

  }

  useEffect(() => {
    getMovie()
  }, [])

  if(loading == true){
    return(
      <div>
        <h1>Carregando detalhes....</h1>
      </div>
    )
  }

  return (
    <div className='movie-detail-container'>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
      <div className='title-vote'>
        <h2>Título original: {movie.original_title}</h2>
        <h2>Nota: {movie.vote_average}</h2>
      </div>
      <h3 className='release-date'>Data de lançamento: {movie.release_date}</h3>
      <h3 className='overview'>Sinopse: {movie.overview}</h3>
      <Buttons movie={movie}/>
    </div>
  );
}

export default Movie;
