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

const getPets =  async () =>{
    try {
        const res = await axios.get(BASE_URL) // one line
        
        return res.data
        
    } catch (error){
        console.log(error)
    }
}
