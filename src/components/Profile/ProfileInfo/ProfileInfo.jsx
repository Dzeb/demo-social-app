import React from 'react';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) =>{
    return(
        <div>
            <div className={classes.user}>
                {/* Автарка */}
                <div className={classes.avatar}>
                    <img src={props.profile.photos.small} alt={props.profile.contacts.fullName} />
                </div>
        
                {/* Описание */}
                <div className={classes.description}>
                    <p>{props.profile.fullName}</p>
                    <br/>
                    <p> <b>Статус: {props.profile.aboutMe}</b> </p>
                    
                    {/*Статус*/}
                    {/*<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>*/}
                    <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                    
                    <br/>
                    <p><b>Контакты:</b> </p>
                    <p>Facebook: {props.profile.contacts.facebook}</p>
                    <p>Github: {props.profile.contacts.github}</p>
                </div>
            </div>
        </div>

    )
}
export default ProfileInfo;