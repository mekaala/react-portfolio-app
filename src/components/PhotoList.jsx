import React, { Component } from 'react'
import Photo from './Photo'
import PhotoData from '../photoData'
import '../styles/PhotoList.css'

export default class PhotoList extends Component {

    render() {
        return (
            <div className="photos">
                <h1>PHOTOGRAPHY</h1>
                <div>
                    <div className="photo-list">
                        {PhotoData.map((photo, i) => {
                            return <Photo photo={photo} key={i} />
                        })}   
                    </div>
                    <h3>
                        <a href="https://www.instagram.com/mekastro/?hl=en" target="_blank">@mekastro</a>
                    </h3>
                </div>
            </div>
        )
    }
}
