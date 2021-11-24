import React from 'react';
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component{

    state = {
        editMode: false,
        status: this.props.status
    };
    
    activateEditMode  = () => {
        this.setState({
            editMode: true
        })
    };
    
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status);
    };
    
    onStatusChange = (e) =>{
        this.setState({
            status: e.target.value
        })
    };
    
    // синхронизируем локальный Status с сервером
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }
    
    render() {
        return(
            <div className={classes.status}>
                <div>
                    {!this.state.editMode &&
                        <div onClick={ this.activateEditMode }>
                            <span>{this.props.status || "No status"}</span>
                        </div>
                    }
                </div>
                <div>
                    {this.state.editMode &&
                        <div >
                            <input autoFocus={true}
                                   value={this.state.status}
                                   onChange={this.onStatusChange}
                                   onBlur={ this.deActivateEditMode }
                            />
                        </div>
                    }
                </div>
            </div>
        )
    }
}
export default ProfileStatus;