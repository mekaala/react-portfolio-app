import React, { Component } from 'react'
import Photo from './Photo'
import PhotoData from '../photoData'

export default class PhotoList extends Component {
    state = {
        showPhoto: false
    }

    togglePhoto = () => {
        const  newShowPhoto = !this.state.showPhoto;
        this.setState({
            showPhoto: newShowPhoto,
        });
    };

    render() {
        return (
            <div className="photos">
                <h1>PHOTOGRAPHY</h1>
                <button id="photography" onClick={ this.togglePhoto }>
                    { this.state.showPhoto
                        ? 'Collapse'
                        : 'View Photos'
                    }
                </button>
                { this.state.showPhoto
                    ?
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
                    : null
                }
            </div>
        )
    }
}
