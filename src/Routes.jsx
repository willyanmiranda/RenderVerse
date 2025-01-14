import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneratePage from './pages/Generate';

const RoutesComponent = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<GeneratePage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesComponent;