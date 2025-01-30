import './App.css';
import FoodCard from './components/Home/FoodCard';
import Navbar from './components/Navbar/Navbar';
import Foods from './Fooddata'
import { useState } from 'react';
function App() {
  const [query,setQuery]=useState('')
  const seach_food = query;
  const items = [...new Set(Foods.map((data) => data.category.toUpperCase()))];
  const [category,setCategory]=useState('all')
     
  

  return (
    <div className="App">
     <Navbar  setQuery={setQuery}  items={items} setCategory={setCategory} />
     <FoodCard Foods={Foods} seach_food={seach_food} category={category}/>
    </div>
  );
}

export default App;
