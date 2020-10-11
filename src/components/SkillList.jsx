import React, { Component } from 'react'
import Skill from './Skill'
import SkillData from '../skillData'


export default class SkillList extends Component {
    state = {
        relevantExperience:
        [
            {
                name: 'Cardiology Center of Dalton',
                location: 'Dalton, Georgia',
                title: 'Website Developer',
                date: 'July 2020 to August 2020',
                description: 'Contracted to develop website for private practice using React.js and Node.js. Includes employee directory and procedure, disease, and health information.',
            },
            {
                name: 'General Assembly',
                location: 'Atlanta, Georgia',
                title: 'Software Engineering Fellow',
                date: 'January 2020 to April 2020',
                description: '12-week, 500+ hour training program focused on developing web applications utilizing software such as Node.js, React, Python, and Django.',
            }
        ],
        showResume: false
    }

    toggleResume = () => {
        const  newShowResume = !this.state.showResume;
        this.setState({
            showResume: newShowResume,
        });
    };

    render() {
        return (
            <div id="skills" className="skills">
                <h1>SKILLS</h1>
                <div className="skill-list">
                    {SkillData.map((skill, i) => {
                        return <Skill skill={skill} key={i} />
                    })}
                </div>
                <button onClick={ this.toggleResume }>
                    { this.state.showResume
                        ? 'Collapse'
                        : 'Experience'
                    }
                </button>
                { this.state.showResume
                    ?
                    <div className="exp-container">
                        {this.state.relevantExperience.map((rel, i) => (
                            <div className="relExp">
                                <h2>{ rel.name }</h2>
                                <h3>{ rel.location }</h3>
                                <h3>{ rel.title }</h3>
                                <h4>{ rel.date }</h4>
                                <p>{ rel.description }</p>
                            </div>
                        ))}
                    </div>
                    : null
                }
            </div>
        )
    }
}
