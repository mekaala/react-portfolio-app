import React, { Component } from 'react'

export default class Project extends Component {
    render() {
        return (
            <div className="project-list">
                <div className="project-item">
                    <a href={this.props.project.url}><img src={this.props.project.image} alt={this.props.project.name}/></a>
                </div>
                <div className="project-description">
                    <div className="project-item-name">
                        <a href={this.props.project.url}>{this.props.project.name}</a>
                    </div>
                    <div>{this.props.project.description}</div>
                </div>
            </div>
        )
    }
}
