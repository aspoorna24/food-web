import './App.css';
import FoodCard from './components/Home/FoodCard';
import Navbar from './components/Navbar/Navbar';
import Foods from './Fooddata'
import { useState } from 'react';
function App() {
  const [query,setQuery]=useState('')
  const seach_food = query;

  return (
    <div className="App">
     <Navbar query={query} setQuery={setQuery} />
     <FoodCard Foods={Foods} seach_food={seach_food}/>
    </div>
  );
}

export default App;
