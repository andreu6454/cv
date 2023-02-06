import React from 'react';
import style from './Main.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>

            <h2>
                Welcome
            </h2>
            <h1>I'm a Frontend developer</h1>
            <h3>based in Saint-Petersburg, Russia </h3>

            <button className={style.mainButton}>Get in touch</button>
        </div>
    );
};

export default Main;