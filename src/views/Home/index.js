import React, { usestate } from 'react'
import './../Home/Home.css'

function Home() {
  const [city, setcity] = usestate('pune')
 
  return (
    <div>
      <h1 className='app-title'>▶️weather app</h1>


      <input className='search-bar'
       type='text'
       placeholder='Enter city...'
       value ={city}
       onChange={(e)=>{
        setcity(e.target.value)
       }}

       

       
       />

      <h1 className='temperature-text'> Temprature:</h1>
    </div>
  )
}

export default Home