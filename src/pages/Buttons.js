import '../../src/App.css';

function Buttons(props) {
    const { movie } = props
    console.log(movie)


    const saveMovie = () => {

        const primeFlix = localStorage.getItem("primeFlix")
        let favoritesMovies = JSON.parse(primeFlix) || []

        if (favoritesMovies.some((f) => f.id == movie.id)) {
            alert("Filme já está salvo")
        } else {
            favoritesMovies.push(movie)
            localStorage.setItem("primeFlix", JSON.stringify(favoritesMovies))
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
