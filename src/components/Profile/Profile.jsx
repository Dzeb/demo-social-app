import React from 'react';
import classes from  './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import UserPostContainer from "./UserPost/UserPostContainer";
import Preloader from "../Common/Preloader/Preloader";

const Profile = (props) =>{
    
    if(!props.profile){
        return <Preloader />
    }
    
    return(
        <div className={classes.profile}>

            {/* Профиль */}
            <ProfileInfo name={"Denis Graur"}
                         town={"Taganrog"}
                         prof={"Web Developer"}
                         profile={props.profile}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}
            />
        
            {/* Сообщение пользователя */}
            <UserPostContainer />

      </div>
    )
}
export default Profile;