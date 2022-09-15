import React from 'react';
import style from "./Skills.module.css";

const SkillCard = (props) => {
    return (
        <div className={style.skillCard}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <div className={style.description}>
                <span>
                    {props.description}
                </span>
            </div>
        </div>
    );
};

export default SkillCard;