import { useState, useEffect } from 'react'
import { getPets } from './services/petService'
import PetList from './components/PetList'
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'

function App() {
/* Old method
  useEffect(()=>{
    const fetchPets = async() => {
      try{
        const petsData = await getPets()
        setPets(petsData)
      } catch (error){
        console.log(error)
      }
    }
    fetchPets()
  },[]) //this way it fires once on load. If you put a state thing in the brackets, you will fire it every time a person changes the state
  */

  const [pets, setPets] = useState([])


  //raul method
  const fetchPets = async () => {
    try {
      const petsData = await getPets();
      setPets(petsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);


  return (
    <>
      <Routes>
        <Route path="/" element={<PetList pets={pets}/>}/> 
      </Routes> 
    </>
  )
}

export default App
