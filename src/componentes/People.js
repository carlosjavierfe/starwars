import React, { useState, useEffect } from "react";
import Image from "next/image";
import genericAvatar from "../imagenes/generic-avatar.png";

export function People({ people }) {
  const [showModal, setShowModal] = useState(false);
  const [homeworldName, setHomeworldName] = useState(null);
  const [filmTitles, setFilmTitles] = useState([]);
  const [speciesName, setSpeciesName] = useState("");
  const [vehiclesNames, setVehiclesNames] = useState([]);
  const [starshipsNames, setStarshipsNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch film titles
      const filmsData = await Promise.all(
        people.films.map(async (filmUrl) => {
          const response = await fetch(filmUrl);
          const data = await response.json();
          return data.title;
        })
      );
      setFilmTitles(filmsData);

      // Fetch species name
      if (people.species.length > 0) {
        const speciesResponse = await fetch(people.species[0]);
        const speciesData = await speciesResponse.json();
        setSpeciesName(speciesData.name);
      }

      // Fetch vehicles names
      const vehiclesData = await Promise.all(
        people.vehicles.map(async (vehicleUrl) => {
          const response = await fetch(vehicleUrl);
          const data = await response.json();
          return data.name;
        })
      );
      setVehiclesNames(vehiclesData);

      // Fetch starships names
      const starshipsData = await Promise.all(
        people.starships.map(async (starshipUrl) => {
          const response = await fetch(starshipUrl);
          const data = await response.json();
          return data.name;
        })
      );
      setStarshipsNames(starshipsData);
    };

    fetchData();
  }, [people.films, people.species, people.vehicles, people.starships]);

  const showCharacterDetails = () => {
    setShowModal(true);
  };
  

  return (
    <div className="text-center p-5">
      <h3>{people.name}</h3>
      <div className="flex justify-center">
        <Image
          className="rounded-full w-64 h-64 mx-4"
          src="/images/1/0.jpeg" // Ruta relativa a la imagen
          alt="Character"
          width={256}
          height={256}
        />
      </div>
      <p>
        <button
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full shadow-md"
          onClick={showCharacterDetails}
        >
          Ver detalles
        </button>
      </p>
      {showModal && (
        <div className="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-w-md border border-gray-500 text-black relative">
            <button
              className="absolute top-2 right-2"
              onClick={() => setShowModal(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  className="text-black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h4 className="mb-4">Detalles del personaje:</h4>
            <p>Nombre: {people.name}</p>
            <p>Altura: {people.height}</p>
            <p>Peso: {people.mass}</p>
            <p>Color de cabello: {people.hair_color}</p>
            <p>Color de piel: {people.skin_color}</p>
            <p>Color de ojos: {people.eye_color}</p>
            <p>Planeta natal: {homeworldName}</p>
            <p>Especie: {speciesName}</p>
            <p>Películas: {filmTitles.join(", ")}</p>
            <p>Vehículos: {vehiclesNames.join(", ")}</p>
            <p>Naves estelares: {starshipsNames.join(", ")}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default People;
