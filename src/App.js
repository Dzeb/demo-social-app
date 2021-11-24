import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initApp} from "./redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import { Suspense, lazy } from 'react';
import {profileWithSuspense} from "./hoc/profileWithSuspense";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import ("./components/Profile/ProfileContainer"));

class App extends React.Component {
    
    componentDidMount() {
        this.props.initApp();
    }
    
    render() {
        if(!this.props.init){
            return <Preloader />
        }
        
        return (
            <div className="app-wrapper">
                
                <HeaderContainer/>
                <Navbar/>
                
                <div className="app-content">
                    
                    <Route path='/profile/:userId?' render={ profileWithSuspense(ProfileContainer)}/>
                    
                    <Route path='/dialogs' render={ () => {
                        return (
                                <Suspense fallback={<Preloader />}>
                                    <DialogsContainer/>
                                </Suspense>
                            )
                    }}/>
                    
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    
                    <Route path='/settings' render={() => <Settings/>}/>
                    
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                
                </div>
            
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    init: state.app.init
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initApp}))(App);

