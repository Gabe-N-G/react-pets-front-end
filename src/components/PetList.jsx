import React from 'react'

function PetList({ pets }) {
  return (
    <div>
      <h1>Pets!</h1>
      {pets.length ? (
        <ul>
          {pets.map((pet) => (
            <li key={pet._id}>{pet.name}</li>
          ))}
        </ul>
      ) : (
        <h1>No pets!</h1>
      )}
    </div>
  );
}


export default PetList