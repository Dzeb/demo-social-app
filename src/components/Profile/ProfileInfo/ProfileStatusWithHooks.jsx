import React, {useEffect, useState} from 'react';
import classes from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
    
    let [editMode, setEditMode]  = useState(false);
    let [status, setStatus]  = useState(props.status);
    
    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);
    
    const activateEditMode = () => {
        setEditMode(true);
    }
    
    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };
    
    const onStatusChange = (e) =>{
        setStatus(e.target.value);
    };
    
    return (
        <div className={classes.status}>
            {!editMode &&
                <div onClick={activateEditMode}>
                    <span >{ props.status || "No status" }</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={ deActivateEditMode } onChange={ onStatusChange } value={ status }/>
                </div>
            }
        </div>
    )
}
export default ProfileStatusWithHooks;