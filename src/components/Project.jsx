/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'

export default class Project extends Component {
    render() {
        return (
            <div className="project-list">
                <div className="project-item-name">
                    <a href={this.props.project.url} target="_blank">{this.props.project.name}</a>
                </div>
                <div className="project-item">
                    <a href={this.props.project.url} target="_blank"><img src={this.props.project.image} alt={this.props.project.name}/></a>
                </div>
                <div className="project-description">
                    <div>{this.props.project.description}</div>
                </div>
                <div>
                    <a href={this.props.project.githubUrl} target="_blank">Project Repository</a>
                </div>
            </div>
        )
    }
}
