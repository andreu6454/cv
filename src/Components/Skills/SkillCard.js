import React from 'react';
import style from "./Skills.module.css";

const SkillCard = () => {
    return (
        <div className={style.skillCard}>
            <div className={style.icon}></div>
            <h3>React</h3>
            <div className={style.description}>
                <span>
                    xxxxxxxxxxxx
                    xxxxxxxxxxxx
                    xxxxxxxxxxxx
                    xxxxxxxxxxxx
                    xxxxxxxxxxxx
                </span>
            </div>
        </div>
    );
};

export default SkillCard;