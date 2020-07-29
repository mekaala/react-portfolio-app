import React, { Component } from 'react'

export default class NavBar extends Component {
    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY > 1;
            const navbar = document.getElementById("navbar");
            if (isTop) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        })
    }
    componentWillUnmount() {
        window.removeEventListener('scroll');
    }
    render() {
        return (
            <div className="navbar" id="navbar">
                <nav>
                    <a href="#about">ABOUT</a>
                    <a href="#skills">SKILLS</a>
                    <a href="#home"><h1>Mekaal Ahmad</h1></a>
                    <a href="#projects">PROJECTS</a>
                    <a href="#photography">PHOTOGRAPHY</a>
                </nav>
            </div>
        )
    }
}
