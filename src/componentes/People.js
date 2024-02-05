export function People({people}) {
    return (
      <div className="text-center p-5">
        <h3>{people.name}</h3>
        <img className="rounded-full w-64 h-64 mx-auto" src="https://i.pinimg.com/474x/a2/a2/27/a2a227afa5d96e329085b989357b1129.jpg" />
        <p>{people.birth_year}</p>
      </div>
    );
  }
  
  export default People;