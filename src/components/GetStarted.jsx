
import React from 'react'
import  rainsun from "../assets/image/rainsun.jpg"
import { Link } from 'react-router-dom'
// import Link from "react-router-dom"


const GetStarted = () => {
  return (
    <div className="get-started-container">
    <div className='get-started'>
      <div className="img-div">
        <img src={rainsun} alt=""  className='get-img'/>
        </div>
        <div className="content">
          <h3 className='h3'> Discover the Weather in your city</h3>
          <p className='p'>Get to know your weather  forecast </p>
      </div>
<div className="btn-div">
  <Link to="/weather"><button>Get Started</button>
  </Link>
{/* <button>Get Started</button> */}

</div>
    </div>
    </div>
  )
}

export default GetStarted
