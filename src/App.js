/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import SplashPage from './components/SplashPage'
import About from './components/About'
import ProjectList from './components/ProjectList'
import SkillList from './components/SkillList'
import PhotoList from './components/PhotoList'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <SplashPage />
      <About />
      <SkillList />
      <ProjectList />
      <PhotoList />
      <Footer />
    </div>
  );
}

export default App;
