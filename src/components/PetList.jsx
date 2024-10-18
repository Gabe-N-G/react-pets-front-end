import React from 'react'
import { Link } from 'react-router-dom';

function PetList({ pets }) {
  return (
    <div>
      <h1>Pets!</h1>
      {pets.length ? (
        <ul>
          {pets.map((pet) => (
            <Link to= {`/pets/${pet._id}`}>
              <li key={pet._id}>{pet.name}</li>
            </Link>
          ))}
        </ul>
      ) : (
        <p>loading pets...</p>
      )}
    </div>
  );
}


export default PetList