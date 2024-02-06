import { useState, useEffect } from 'react';

function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  const showCharacterDetails = (character) => {
    alert(`Detalles del personaje: ${character.name}`);
    // Aquí podrías redirigir a una página con más detalles del personaje
    // o mostrar los detalles en una ventana emergente, modal, etc.
  };

  return (
    <div>
      <h1>Listado de Personajes de Star Wars</h1>
      <ul>
        {characters.map(character => (
          <li key={character.name}>
            {character.name}
            <button onClick={() => showCharacterDetails(character)}>Ver detalle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;