import React from 'react';
import style from './Nav.module.css'

const Nav = () => {
    return (
        <div className={style.navBlock}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    );
};

export default Nav;