import classes from "./Preloader.module.css";
import preloader from "../../../assets/images/preloader.svg";
import React from "react";

let Preloader = () => {
    return(
        <div className={classes.preloader}>
            <img src={preloader}  alt={"preloader"} />
        </div>
    )
}

export default Preloader