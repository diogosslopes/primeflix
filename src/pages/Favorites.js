import '../../src/App.css';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast} from 'react-toastify'

function Favorites() {
  const [primeFlix, setPrimeFlix] = useState(JSON.parse(localStorage.getItem("primeFlix")))

  const deleteMovie = (id) => {
    let filterMovie = primeFlix.filter((f) => id !== f.id)
    setPrimeFlix(filterMovie)
    localStorage.setItem("primeFlix", JSON.stringify(filterMovie))
    toast.success("Filme excluido !")
  }

  console.log(primeFlix)
  return (
    <div className='favorites-list'>
      <table className='table-favorites'>
        <thead>
          <th>ID</th>
          <th>Nome</th>
          <th>Nota</th>
          <th>Trailer</th>
          <th></th>
        </thead>
        <tbody>
          {primeFlix.map((f => {
            return (
              <tr>
                <td>{f.id}</td>
                <td>{f.title}</td>
                <td>{f.vote_average}</td>
                <td><a href={`https://www.youtube.com/results?search_query=${f.title} trailer`} target="_blank" rel="external"><img src={require('../img/youtube20x20.png')} /></a></td>
                <td>
                  <Link to={`/movie/${f.id}`}>
                    <button>Detalhes</button>
                  </Link>
                </td>
                <td><button onClick={() => deleteMovie(f.id)}>Excluir</button></td>
              </tr>
            )
          }))}
        </tbody>
      </table>
    </div>
  );
}

export default Favorites;
