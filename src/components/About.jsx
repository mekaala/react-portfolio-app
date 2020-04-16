import React, { Component } from 'react'
import profile from '../images/profile.jpg'

export default class About extends Component {
    render() {
        return (
            <div id="about" className="about">
                <h1>Who Am I...</h1>
                <div className="about-container">
                    <img src={profile} alt='profile'/>
                    <div className="about-description">
                        <p>Software Engineer with a background in Chemistry and photographic passion. Science builds my drive to experiment with and construct complex objectives. Photography nurtures my desire to create engaging and resonating designs. Both move me to develop complex and responsive software.<br/>
                        Outside of Software Development, I am a massive Nintendo fan who loves all the latest games, and a photographer who focuses on capturing the night sky, landscapes, and nature.</p>
                        <h3><a href="https://www.linkedin.com/in/mekaal-ahmad-b7339191/" target="_blank">LinkedIn Profile</a></h3>
                    </div>
                </div>
            </div>
        )
    }
}
