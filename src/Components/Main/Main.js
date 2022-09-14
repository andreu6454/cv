import React from 'react';
import style from './Main.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.description}>
                <span>
                    Hi There
                </span>
                    <h1>I am Andrey Malin</h1>
                    <p>Frontend Developer </p>
                </div>
                <div className={style.photo}>
                    <img src={"https://avatars.githubusercontent.com/u/70666153?s=400&u=14ec4f053b6fd6742440c3b25abbe728209bab7d&v=4"} alt={"avatar"}></img>
                </div>
            </div>
        </div>
    );
};

export default Main;