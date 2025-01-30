import React from 'react'
import './navbar.css'

const Navbar = ({query,setQuery}) => {
  
  
   
  return (
    <div className='navbar'>
     <nav>
       <div className='header'>
       <div className='logo'>
       <h1>
       F<span style={{ color: "tomato" }}>o</span>
       <span style={{ color: "tomato" }}>o</span>d Ch
       <span style={{ color: "tomato" }}>o</span>ice
    </h1>
       </div>
       <div className='search'>
          <input type="text" placeholder='Search Food ...' onChange={(e) => setQuery(e.target.value)}/>
       </div>
       </div>
        <ul>
           <li>Breakfast</li>
           <li>Lunch</li>
           <li>Dinner</li>
           <li>Snacks</li>
           <li>Drinks</li>
        </ul>

     </nav>


    </div>
  )
}

export default Navbar