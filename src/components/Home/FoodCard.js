import React from 'react'
import './foodcard.css'


const FoodCard = ({Foods,seach_food,category}) => {

  return (
    <>
      <div className="food">
        
          {  
            Foods.filter(data=> category.toLowerCase() === "all" || data.category.toUpperCase() === category.toUpperCase() && data.title.toLowerCase().includes(seach_food.toLowerCase())).map((data) => {
              return (
                <>  
                 <div key={data.id} className='card'>
                  <div className='food-img'>
                    <img src={require(`../../../public/image/${data.img}`)} alt="" />
                  </div>
                  <div className='food-detail'>
                    <h2>{data.title}</h2>
                    <p className="food-desc">{data.desc}</p>
                    <button > View More</button>
                  </div>
                  <div className='food-type'>
                     {data.type === 'veg' ? <img src={require('../../assets/svg/veg-icon.png')} alt="veg" /> : <img src={require('../../assets/svg/non-veg-icon.png')} alt="non-veg" />}
                    
                  </div>
                 </div>
                </>
              )
            })
          
        }
        
      </div>
    </>
  )
}

export default FoodCard