import React from 'react'
import Skill from './Skill'
import SkillData from '../skillData'
import '../styles/SkillList.css'

function SkillList() {
    return (
        <div id="skills" className="skills">
            <h1>SKILLS</h1>
            <div className="skill-list">
                {SkillData.map((skill, i) => {
                    return <Skill skill={skill} key={i} />
                })}
            </div>
        </div>
    )
}

export default SkillList