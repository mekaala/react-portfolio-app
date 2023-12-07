/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="bottom">
                    <nav className="footernav">
                        <a href="https://www.linkedin.com/in/mekaal-ahmad/" target="_blank">Linkedin</a> | <a href="https://github.com/mekaala" target="_blank">GitHub</a> | <a href="https://www.instagram.com/mekastro/?hl=en" target="_blank">Instagram</a>
                    </nav>
                </div>
            </div>
        )
    }
}