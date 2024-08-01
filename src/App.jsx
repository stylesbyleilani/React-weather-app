
import {BrowserRouter, Routes, Route ,Link } from "react-router-dom"
import GetStarted from "./components/GetStarted"
import WeatherPage from "./components/WeatherPage"
function App() {
  return(
    <div>
        <BrowserRouter>
         <Routes>
         <Route path="/"  element={< GetStarted/>} />
         <Route path="/weather"  element={< WeatherPage/>} />

         </Routes>

        </BrowserRouter>
    </div>
  )
}

export default App
