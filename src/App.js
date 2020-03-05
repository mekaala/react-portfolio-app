import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import SplashPage from './components/SplashPage'
import ProjectList from './components/ProjectList'
import SkillList from './components/SkillList'
import PhotoList from './components/PhotoList'
import About from './components/About'


function App() {
  return (
    <div className="App">
      <NavBar />
      <SplashPage />
      <ProjectList />
      <SkillList />
      <PhotoList />
      <About />
    </div>
  );
}

export default App;
