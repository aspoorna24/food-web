import React from 'react'
import './navbar.css'

const Navbar = ({setQuery,items,setCategory}) => {

  
   
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
         
         <li key="all" onClick={() => setCategory("all")}>All</li>
         {
            items.map((item)=><li key={item} onClick={() => setCategory(item)}>{item}</li>)
         }
        
        </ul>

     </nav>


    </div>
  )
}

export default Navbar