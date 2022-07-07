import '../../src/App.css';
import api from '../services/api';
import { Link, useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'

function Movie() {

  const { id } = useParams()
  const [movie, setMovie] = useState([])

  const getMovie = async () =>{
      await api.get(`/movie/${id}`,{
      params:{
        api_key: "da00fdb9a2a3618f3d3b7a84842cbb89",
        language: "pt-BR",
      }
    })
    .then((response)=>{
      setMovie(response.data)
      console.log(response.data)
    })
    .catch(()=>{
      console.log("Nao encontrada")
    })

    
    

  }

  useEffect(()=>{
    getMovie()
  },[])

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
    </div>
  );
}

export default Movie;
