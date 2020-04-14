import React, { Component } from 'react'

export default class Skill extends Component {
    render() {
        return (
            <div className="skill">
                <h3>{this.props.skill.name}</h3>
            </div>
        )
    }
}
