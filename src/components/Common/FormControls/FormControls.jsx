import React from "react";
import classes from "../FormControls/FormControls.module.css";

const FormControl = ({input, meta:{error, touched}, child, ...props}) => {
    //const hasError = meta.error && meta.touched;
    const hasError = error && touched;
    
    return (
        <div className={classes.formControl + ' ' + (hasError && classes.error) }>
            <div>
                {props.children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}