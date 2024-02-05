"use client";
import PeopleList from "../componentes/PeopleList";
import "tailwindcss/tailwind.css";


function App() {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4">Star Wars</h1>
      <PeopleList/>
    </div>
  );
}

export default App;
