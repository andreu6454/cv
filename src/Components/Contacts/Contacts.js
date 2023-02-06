import React from 'react';
import style from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={style.title}>Contact me</div>
            <form className={style.container}>
                <div className={style.Input}><input defaultValue={"<Input>"}></input></div>
                <div className={style.Input}><input defaultValue={"<Input>"}></input></div>
                <div className={style.TextArea}><textarea defaultValue={"<Textarea>"}></textarea></div>
            </form>
            <div className={style.buttonBlock}><button type={"submit"}> Send </button></div>
        </div>
    );
};

export default Contacts; 