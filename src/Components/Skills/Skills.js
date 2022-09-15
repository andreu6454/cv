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
                <SkillCard title={"React"} description={"xxxxxxxxxxxx\n xxxxxxxxxxxx\n xxxxxxxxxxxx\n xxxxxxxxxxxx\n xxxxxxxxxxxx "}/>
                <SkillCard title={"HTML"} description={"xxxxxxxxxxxx\n xxxxxxxxxxxx\n xxxxxxxxxxxx\n xxxxxxxxxxxx\n xxxxxxxxxxxx"}/>
                <SkillCard title={"CSS"} description={"xxxxxxxxxxxx\n xxxxxxxxxxxx\n xxxxxxxxxxxx\n xxxxxxxxxxxx\n xxxxxxxxxxxx"}/>
                <SkillCard title={"Redux"} description={"xxxxxxxxxxxx\n xxxxxxxxxxxx\n xxxxxxxxxxxx\n xxxxxxxxxxxx\n xxxxxxxxxxxx"}/>
            </div>
        </div>
    );
};

export default Skills;