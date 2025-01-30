import React from 'react'
import './detail.css'
import { useParams, useNavigate } from "react-router-dom";
import Fooddata from '../Main/Fooddata'
function Detail() {
  const { id } = useParams();
  
  const item = Fooddata.find((item) => item.id === parseInt(id))
  const navigate = useNavigate();
  return (
   
    <div className='food-details'>
     <div className='food-imgs'>
       <img src={require(`../../../public/image/${item.img}`)} alt="No network" />
     </div>
     <div className='food-content'>
       <button onClick={() => navigate(-1)}> Back</button>
       <h1>{item.title}</h1>
       <p className='desc'>{item.desc}</p>
       <p className='ingridents'>Ingredients needed : {item.ingredients.join(' , ')} 🍽️  </p>
       <p className='steps'><b>Steps to Prepare </b>{ item.steps.map((step) =>{
          return(
            <>
            <li>{step}</li>
            </>
          )
       }) }</p>
        
       <p className='end'> Delight in every bite – Happy Cooking! 👨‍🍳  👩‍🍳</p>
     </div>
    </div>
   
  )
}

export default Detail