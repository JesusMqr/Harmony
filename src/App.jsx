import React from "react"
import NavBar from "./sections/NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./sections/Home"
import Artist from "./sections/Artist"


export const App =()=>{

  return (
    <Router>
      <NavBar/>
      <Routes>
        
        <Route path="/" element={<Home />}/>
        
        <Route path="/artist" element={<Artist />}/>
      
        
        
      </Routes>
    </Router>
  );
}