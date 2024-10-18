import React from 'react'
import { Link } from 'react-router-dom';

function PetList({ pets }) {
  return (
    <div>
      <h1>Pets!</h1>
      {pets.length ? (
        <ul>
          {pets.map((pet) => (
            <Link key={pet._id} to= {`/pets/${pet._id}`}>
              <li>{pet.name}</li>
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