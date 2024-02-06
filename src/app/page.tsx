"use client";
import { useEffect, useState } from "react";
import PeopleList from "../componentes/PeopleList";
import starWarsBackground from "../imagenes/star-wars-background.jpg";

function App() {
  return (
    <div className="bg-dark text-white">
      <header className="bg-cover bg-center flex justify-between items-center p-4">
      <img src="https://i.pinimg.com/originals/b6/af/5a/b6af5aeff0ee43a4253fc70c167bb6db.png" alt="Star Wars Logo"  className="mx-auto"/>
        <div></div> 
      </header>
      <PeopleList />
    </div>
  );
}

export default App;
