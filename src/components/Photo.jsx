import React, { Component } from 'react'

export default class Photo extends Component {
    render() {
        return (
            <div className="photo">
                <img src={this.props.photo.image} alt={this.props.photo.name}/>
                <h3>{this.props.photo.name}</h3>
            </div>
        )
    }
}
