import React, { Component } from 'react'
import profile from '../images/profile.jpg'

export default class About extends Component {
    render() {
        return (
            <div id="about" className="about">
                <img src={profile} alt='profile'/>
                <div class="about-description">
                    <h1>ABOUT ME</h1>
                    <h2>Mekaal Ahmad</h2>
                    <p>I am currently attending General Assembly as a student of the Software Engineering Immersive program. With this program, I hope to develop an advanced set of skills to benefit others. I hope to master website creation, and craft many successful projects.<br/>
                    Outside of General Assembly, I am a massive Nintendo fan who loves all their games, and a photographer who focuses on capturing the night sky, landscapes, and nature. I hope that with this game, I can display my capabilities in Software Engineering.</p>
                </div>
            </div>
        )
    }
}
