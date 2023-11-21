import React from 'react'
import Typewriter from './Typewriter'

function SplashPage() {
    const { word } = Typewriter(['Software', 'React.js', 'Front End', 'Back End', 'Node.js', 'Full Stack', 'JavaScript'], 130, 20)
    return (
        <div id="home" className="splash-page">
            <div>
                <h1>Mekaal Ahmad</h1>
                <h2>{ word } Engineer</h2>
            </div>
        </div>
    )
}

export default SplashPage