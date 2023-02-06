import React from 'react';
import style from "./Header.module.css"
import Nav from "./Nav/Nav";

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.nameBlock}>
                <img
                    className={style.photo}
                    src={"https://avatars.githubusercontent.com/u/70666153?s=400&u=14ec4f053b6fd6742440c3b25abbe728209bab7d&v=4"}
                    alt={"avatar"}></img>
                <h1> Andrey Malin </h1>
            </div>
            <Nav/>
        </div>
    );
};

export default Header;