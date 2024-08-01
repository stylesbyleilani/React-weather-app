
import React, { useEffect, useState } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaGripLines } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import clearcloud from '../assets/image/clearcloud.jpg'
import ice from '../assets/image/ice.jpg'
import lighting from '../assets/image/lightning.jpg'
import sunny from '../assets/image/sunny.jpg'
import rainy from '../assets/image/rainy.jpg'
import { WiRainWind } from "react-icons/wi";






import { FaCloudSunRain } from "react-icons/fa"; 
import { IoIosSunny } from "react-icons/io"; 
import { MdHome } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { FaCloud } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { WiSnowWind } from "react-icons/wi";






const WeatherPage =  () => {

   useEffect(()=> {

      const fetchDefault = async () =>{
           const defaultLocation = "lagos"
           const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=Metric&appid=${api_key}`
           const res = await fetch(url)
           const defaultData = await res.json()
             setData(defaultData)
          }

          fetchDefault()
   }, [])

   const [data, setData] = useState({})
   const [location, setLocation] = useState("")
 const api_key = import.meta.env.VITE_API_KEY;

 function handleInput(e){
setLocation(e.target.value)
 } 
 const search = async () => {
   if(location.trim !== ""){
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`
      const res = await fetch(url)
      const searcData = await res.json()
      console.log(searcData)
      setData(searcData)
      setLocation("")
   }

 }
 function handleKeyDown(e){
  if(e.key === "Enter"){
   search()
  }
 }

   const weatherImages = {
   Clear: sunny,
   Clouds: clearcloud,
   Snow: ice,
   Rain:rainy,
   Maze:lighting,
 }
 const weatherImage = data.weather ? weatherImages[data.weather[0].main] : null
const currentDate = new Date()
const dayweek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const months = ["Jan", "Feb", "Mar", 'Apr', "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const dayweeks = dayweek[currentDate.getDay()]
const month = months[currentDate.getMonth()]
const daymonth = currentDate.getDate()
const FormatedDate = `${dayweeks}, ${daymonth} ${month}`
  return (
    <div className="container">
    <div className="weather-app">
        <div className="search">
         <div className="search-top">
            <FaGripLines/>
            <CiLocationOn/>
            <p className='location'>{data.name} </p>
         </div>
         <div className="search-bottom">
        
            <input type="text" value={location} onChange={handleInput} onKeyDown={handleKeyDown} placeholder='Enter Location'/>
             <IoSearchOutline className='icon-search' onClick={search}/>
             
         </div>
        </div>
        <h2 className='today'>Today's Report</h2>

        <div className="weather">
        <img src={weatherImage} alt=""  />
        <div className="weather-type">{data.weather ? data.weather [0].main : null } </div>
        <div className="temp">{data.main ? `${Math.floor(data.main.temp) }°` : null} </div>
        </div>
         <div className="weather-date">
            <p>{FormatedDate}</p>
         </div>
         <div className="weather-data">

             <div className="wind">
           <div className="data-name"></div>
            < FaCloud className='con'/>
            <div className="data">{data.main ? data.main.pressure : null}km/hr</div>
            <div className="name">pressure</div>

            </div>

            
              
            <div className="wind">
           <div className="data-name"></div>
            <FaCloudSunRain className='con'/>
            <div className="data">{data.main ? data.main.humidity : null}%</div>
            <div className="name">humidity</div>

            </div>

            <div className="wind">
           <div className="data-name"></div>
            <FaCloudSunRain className='con'/>


            <div className="data">{data.wind ? data.wind.speed : null}km/hr</div>
            <div className="name">wind</div>

            </div>

         </div>
         <div className="other-icons">
            <Link to="/"><MdHome className='others'/>
            </Link>
        <IoSearchOutline  onClick={search} className='others'/>
        <CiLocationOn className='others'/>
        <CiUser className='others'/>
         </div>
         
       </div>



       </div>
  )
}

export default WeatherPage
