import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component{
    
    componentDidMount() {
        let userId = this.props.match.params.userId // достем id из url
        
        if(!userId){
            userId = this.props.authorizedUserId;
            if(!userId){
                this.props.history.push("/login");
            }
        }
        
        this.props.getUserProfile(userId);
        
        setTimeout(() => {
            this.props.getUserStatus(userId);
        }, 1000)
    }
    
    render() {
        
        return (
           <Profile {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

let mapStateToProps =(state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    idAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter
)(ProfileContainer);
