import React from 'react'
import profile from '../images/profile.jpg'
import '../styles/About.css'

function About() {
  return (
    <div id="about" className="about">
    <h1>Who Am I...</h1>
    <div className="about-container">
        <img src={profile} alt='profile'/>
        <div className="about-description">
            <p>I am a Software Engineer with over three years of experience building full stack applications and websites. My previous background in Chemistry builds my drive to experiment with and construct complex objectives. My passion for photography nurtures my desire to create engaging and resonating designs. Both move me to develop complex and responsive software.</p>
            <h3><a href="https://www.linkedin.com/in/mekaal-ahmad-b7339191/" target="_blank">LinkedIn Profile</a></h3>
        </div>
    </div>
</div>  )
}

// this page needs more information on career background and accomplishments at my work
// also needs a new background that is better looking

export default About