import React from 'react';
import style from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={style.title}>Contact me</div>
            <div className={style.container}>
                <div className={style.Input}><input defaultValue={"<Input>"}></input></div>
                <div className={style.Input}><input defaultValue={"<Input>"}></input></div>
                <div className={style.TextArea}><textarea defaultValue={"<Textarea>"}></textarea></div>
            </div>
            <div className={style.buttonBlock}><button> Send </button></div>
        </div>
    );
};

export default Contacts;