import React from "react";
import classes from "./User.module.css";
import userPhoto from "../../../assets/images/img-user.png";
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, follow, unfollow}) => {
    return(
            <div className={classes.userElem} >
                
                <div className={classes.userElem_imageBlock}>
                    
                    {/*аватарка*/}
                    <div className={classes.userElem_image}>
                        <NavLink to={'/Profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt={user.name}/>
                        </NavLink>
                    </div>
                
                    {/*follow / unfollow*/}
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => { unfollow(user.id)}}>unfollow</button>
                    
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => { follow(user.id) }}>follow</button>
                    }
                </div>
            
                {/*информация*/}
                <div className={classes.userElem_info}>
                    <div className={classes.userElem_nameAndStatus}>
                        <div className={classes.userElem_name}>
                            {user.name}
                        </div>
                        <div className={classes.userElem_status}>
                            {user.status}
                        </div>
                    </div>
                
                    <div className={classes.userElem_location}>
                        <div className={classes.userElem_city}>
                            {"user.location.city"}
                        </div>
                        <div className={classes.userElem_country}>
                            {"user.location.country"}
                        </div>
                    </div>
                </div>
                
            </div>
    )
}

export default User;