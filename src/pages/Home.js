import '../../src/App.css';
import api from '../services/api';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function Home() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  const getMovies = async () => {
    const result = await api.get("movie/now_playing", {
      params: {
        api_key: "da00fdb9a2a3618f3d3b7a84842cbb89",
        language: "pt-BR",
        page: 1
      }
    })

    setFilmes(result.data.results)
    setLoading(false)
  }


  useEffect(() => {
    getMovies()
  }, [])

  if(loading == true){
    return(
      <div>
        <h1>Carregando.....</h1>
      </div>
    )
  }

  return (
    <div className='movies-container'>
      {filmes.map((filme) => {
        return (
          <article className='movie-container' key={filme.id}>
            <strong>{filme.title}</strong>
            <Link to={`/movie/${filme.id}`}>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
            </Link>
          </article>
        )
      })}
    </div>
  );
}

export default Home;
