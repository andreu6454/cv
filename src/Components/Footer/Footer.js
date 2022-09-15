import React from 'react';
import style from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.nameBlock}> Andrey Malin </div>
            <div className={style.container}>
                <div className={style.block}></div>
                <div className={style.block}></div>
                <div className={style.block}></div>
                <div className={style.block}></div>
            </div>
            <div className={style.rightsBlock}> All rights reserved</div>
        </div>
    );
};

export default Footer;