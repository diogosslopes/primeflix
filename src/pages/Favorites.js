import '../../src/App.css';

function Favorites() {
  const primeFlix = JSON.parse( localStorage.getItem("primeFlix"))

  console.log(primeFlix)
  return (
    <div className='favorites-list'>
      {primeFlix.map((f=>{
        return(
          <div>
            <p>ID: {f.id}</p>
            <p>Nome: {f.title}</p>
          </div>
        )
      }))}
    </div>
  );
}

export default Favorites;
