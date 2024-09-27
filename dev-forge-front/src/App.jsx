import { useState } from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './components/Login';
import Project from './components/Project';
import Dashboard from './components/Dashboard';
import LearningPath from './components/LearningPath';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Challenge from './components/Challenge';
import Home from './components/Home';

function App() {


  return (
    <>

      <h1>Dev Forge</h1>
      <div className="card">
        <p>
          Made by me, experienced by you!
        </p>
      </div>



      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/learning-path" element={<LearningPath />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/challenge" element={<Challenge />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </div>


      <p className="read-the-docs">
        This an application that teaches you to be a dev by completing the application
      </p>
    </>
  )
}

export default App
