import React from 'react';
import style from './Projects.module.css'

const ProjectCard = (props) => {
    return (
        <div className={style.projectCard}>
            <div className={style.imgBlock}>
                <div className={style.buttonBlock}> <a href={""}>view project</a> </div>
            </div>
            <div className={style.projectTitle}>{props.title}</div>
            <div className={style.descriptionBlock}>{props.description}</div>
        </div>
    );
};

export default ProjectCard;