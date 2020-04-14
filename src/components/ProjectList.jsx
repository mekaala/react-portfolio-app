import React, { Component } from 'react'
import Project from './Project'
import ProjectData from '../projectData'

export default class ProjectList extends Component {
    render() {
        return (
            <div id="projects" className="projects">
                <h1>PROJECTS</h1>
                <div className="project-container">
                    {ProjectData.map((project, i) => {
                        return <Project project={project} key={i} />
                    })}
                </div>
            </div>
        )
    }
}
