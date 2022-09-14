import React from 'react';
import style from './Skills.module.css'
import SkillCard from "./SkillCard";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={style.title}>
                My skills
            </div>
            <div className={style.container}>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
                <SkillCard/>
            </div>
        </div>
    );
};

export default Skills;