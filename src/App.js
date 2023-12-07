/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import About from './components/About'
import ProjectList from './components/ProjectList'
import PhotoList from './components/PhotoList'
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route exact path='/' element={ <Home/> }/>
          <Route exact path='/about' element={ <About/> }/>
          <Route exact path='/projects' element={ <ProjectList/> }/>
          <Route exact path='/photography' element={ <PhotoList/> }/>
        </Routes>
      {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
