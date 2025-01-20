import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneratePage from './pages/Generate';
import CreatePostPage from './pages/CreatePost';
import HomePage from './pages/Home';

const RoutesComponent = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/generate" element={<GeneratePage/>}/>
            <Route path="/generate/create-post" element={<CreatePostPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesComponent;