// src/components/PetForm.jsx

import { useState } from 'react';
import { createPet } from '../services/petService';
import { useNavigate } from 'react-router-dom';

const PetForm = ({ setToggle }) => {
  // formData state to control the form
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    breed: '',
  });

  const navigate = useNavigate();

  // handleChange function to update formData state
  const handleChange = (e) => {
    setFormData((prevFormData) =>({ //solves rendering issues as compared to using the formdata.
        ...prevFormData,
        [e.target.name]: e.target.value,
    }))
};

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createPet(formData);
        setToggle((prev) => !prev);
        navigate("/");
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="age"> Age </label>
        <input
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <label htmlFor="breed"> Breed </label>
        <input
          id="breed"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
        />
        <button type="submit">Add New Pet</button>
      </form>
    </div>
  );
};

export default PetForm;
