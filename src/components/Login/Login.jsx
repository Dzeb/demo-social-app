import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormControls/FormControls";
import {requiredField} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import classes from "./../Common/FormControls/FormControls.module.css";


const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Email'} name={'email'} component={Input} validate={[requiredField]}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} type={"password"} component={Input} validate={[requiredField]}/>
                </div>
                <div className={classes.d_inlineBlock}>
                    <Field type="checkbox" name={'rememberMe'} component={Input}/>
                </div>
                <span>Remember me</span> <br/>
                
                { props.error && <div className={classes.errorSummary}> {props.error} </div> }
                
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({ form: 'login'})(LoginForm);

const Login = (props) => {
    
    const onSubmit = (valueFromLoginForm) =>{
       props.login(valueFromLoginForm.email, valueFromLoginForm.password, valueFromLoginForm.rememberMe);
    }
    
    if(props.isAuth){
        return <Redirect to={"/profile"} />
    }
    
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);