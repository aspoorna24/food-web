import React from 'react'
import FoodCard from '../Home/FoodCard';
import Navbar from '../Navbar/Navbar';
import Foods from './Fooddata'
import { useState } from 'react';
const Main = () => {
    const [query,setQuery]=useState('')
    const seach_food = query;
    const items = [...new Set(Foods.map((data) => data.category.toUpperCase()))];
    const [category,setCategory]=useState('all')
  return (
    <>
      <Navbar  setQuery={setQuery}  items={items} setCategory={setCategory} />
      <FoodCard Foods={Foods} seach_food={seach_food} category={category}/>
    </>
  )
}

export default Main