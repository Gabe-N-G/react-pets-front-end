import axios from "axios";

/*
FETCH METHOD
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export { index };
*/

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`; //later on raul will configure so that there is a dev and production server.

export const getPets =  async () =>{
    try {
        const res = await axios.get(BASE_URL) // one line translation for AXIOS
        // console.log(res)
        return res.data
    } catch (error){
        console.log(error)
    }
}

export const getPet = async (petId) => {
    try {
        const res = await axios.get(`${BASE_URL}/${petId}`) 
        console.log(res)
        return res.data
    } catch (error){
        console.log(error)
    }
}

export const createPet = async(petData) => {
    try {
        const res = await axios.post(BASE_URL, petData)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const updatePet = async (petId, petData) => {
    try {
      const response = await axios.put(`${BASE_URL}/${petId}`, petData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const deletePet = async (petId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${petId}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };