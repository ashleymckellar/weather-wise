import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
 
  const [location, setLocation] = useState('')
  const [forecast, setForecast] = useState(null)
  const [formData, setFormData] = useState({
    location:""
})

  console.log(forecast)
  console.log(location)
  console.log(formData)

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if(!formData) {
      console.log("location is required")
      
    } else {
    setFormData(formData.location)
  }
  getForecast()
}



const apiUrL = `http://api.weatherapi.com/v1/current.json?key=d9d75dd7816541ff94f202634242104&q=${location}&aqi=no`
// const params = formData.location


  const getForecast = ()=> {
    
      axios.get(apiUrL)
        .then(response => setForecast(response.data))
        .catch(error => console.log(error));
    

  }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder='Location' value={location} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {forecast && (
        <div>
          <h1>{forecast.location.name}</h1>
          <p>Temp(F): {forecast.current.temp_f}</p>
        </div>
      )}
    </>
  )
}

export default App
