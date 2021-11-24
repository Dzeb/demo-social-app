import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User/User";
import classes from "./Users.module.css";


let Users = (props) => {

    return(
        <div>
            {/*Paginator*/}
            <Paginator totalItemsCount={props.totalUserCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
            />
        
            {/*User*/}
            <div className={classes.usersList}>
                {props.users.map(user =>
                    <User user={user}
                          followingInProgress={props.followingInProgress}
                          follow={props.follow}
                          unfollow={props.unfollow}/>
                )}
            </div>
          
        </div>
    )
}

export default Users;