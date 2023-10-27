import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../Home/Home.css';

function Home() {
  const [city, setCity] = useState('Pune'); // Corrected capitalization and initial city
  const [Temperature ,setTemperature] = useState('0'); // Initialize with a string
  const [message,setMessage] = useState ('')

   async function loadweatherINFO(){
    try{
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f652964084c552e8c0492237a3fabd9c')
    
    setTemperature((response.data.main.temp -273).tofixed(2))
    setMessage('')
    }
    catch(err){
      
      setTemperature(0)
      setMessage('city Not Found')
    }
  }

  useEffect(()=>{
    loadweatherINFO()
  }, [city])

  return (
    <div>
      <h1 className='app-title'>Weather App {city}</h1>
      
      <input
        className='search-bar'
        type='text'
        placeholder='Enter city...'
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
    
      <h1 className='temperature-text'>Temperature: {Temperature} °C</h1>
      <p className='message-text'>{message}</p>
    </div>
  );
}

export default Home;
