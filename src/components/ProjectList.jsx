import React, { Component } from 'react'
import Project from './Project'
import ProjectData from '../projectData'
import '../styles/ProjectList.css'

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
                <h3>
                    <a href="https://github.com/mekaala" target="_blank">GitHub Profile</a><br/>
                    <a href="https://github.com/mekaala/react-portfolio-app" target="_blank">Portfolio Repository</a>
                </h3>
            </div>
        )
    }
}
