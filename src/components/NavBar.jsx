import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <a href="#skills">SKILLS</a>
                    <a href="#projects">PROJECTS</a>
                    <a href="#home"><h1>Mekaal Ahmad</h1></a>
                    <a href="#photography">PHOTOGRAPHY</a>
                    <a href="#aboutMe">ABOUT</a>
                </nav>
            </div>
        )
    }
}
