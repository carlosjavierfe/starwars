import React, { useEffect, useState } from "react";
import People from "./People";

function PageNav({ page, setPage }) {
  const goToPreviousPage = () => {
    setPage(page - 1);
  };

  const goToNextPage = () => {
    setPage(page + 1);
  };

  return (
    <header className="flex justify-between items-center mb-4">
      <div>
        <button
          type="button"
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full shadow-md mr-2"
          onClick={goToPreviousPage}
          disabled={page === 1} // Deshabilita el botón si estamos en la primera página
        >
          Previous Page
        </button>
      </div>
      <p className="text-4xl font-sans"> Personajes Page: {page}</p>
      <button
        type="button"
        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full shadow-md"
        onClick={goToNextPage}
      >
        Next Page
      </button>
    </header>
  );
}

export function PeopleList() {
  const [peoples, setPeoples] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function dataFetch() {
      const response = await fetch(`https://swapi.dev/api/people?page=${page}`);
      const data = await response.json();
      setLoading(false);
      setPeoples(data.results);
    }

    dataFetch();
  }, [page]);

  return (
    <div className="container mx-auto ">
      <PageNav page={page} setPage={setPage} />

      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className="grid grid-rows-4 grid-flow-col gap-4">
          {peoples.map((people) => {
            return (
              <div className="" key={people.name}>
                <People  people={people} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PeopleList;
