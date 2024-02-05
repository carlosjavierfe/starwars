import { useEffect, useState } from "react";
import People from "./People";

function PageNav(props) {
  return (
    <header className="flex-row-reverse">
      <p> Page: {props.page}</p>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
    <div className="container">
      <PageNav page={page} setPage={setPage} />

      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className="row">
          {peoples.map((people) => {
            return (
              <div className="col-md-4" key={people.name}>
                <People people={people} />
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
