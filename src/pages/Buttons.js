import '../../src/App.css';
import { toast } from 'react-toastify'

function Buttons(props) {
    const { movie } = props
    console.log(movie)


    const saveMovie = () => {

        const primeFlix = localStorage.getItem("primeFlix")
        let favoritesMovies = JSON.parse(primeFlix) || []

        if (favoritesMovies.some((f) => f.id == movie.id)) {
            toast.warn("Filme já está salvo")
        } else {
            favoritesMovies.push(movie)
            localStorage.setItem("primeFlix", JSON.stringify(favoritesMovies))
            toast.success("Filme salvo")
        }

    }

    return (
        <div className='buttons'>
            <button onClick={saveMovie}>Salvar</button>
            <a href={`https://www.youtube.com/results?search_query=${movie.title} trailer`} target="_blank" rel="external"><button>Trailer</button></a>
        </div>
    );
}

export default Buttons;
