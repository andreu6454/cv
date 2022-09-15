import React from 'react';
import style from "./Projects.module.css"
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div className={style.projects}>
            <div className={style.title}> My Projects</div>
            <div className={style.container}>
                <ProjectCard title={"Social Network"} description={"Description"}/>
                <ProjectCard title={"Todolist"} description={"Description"}/>
            </div>
        </div>
    );
};

export default Projects;