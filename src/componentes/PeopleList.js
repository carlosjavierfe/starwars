import { useEffect, useState } from "react";
import People from "./People";

function PageNav(props) {
  return (
    <header className="flex justify-between items-center mb-4">
      <p> Page: {props.page}</p>
      <button
        type="button"
        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full shadow-md"
        onClick={() => props.setPage(props.page + 1)}
      >
        Page {props.page}
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
      <PageNav page={page} setPage={setPage} />
    </div>
  );
}

export default PeopleList;