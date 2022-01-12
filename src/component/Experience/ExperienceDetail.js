import React from 'react'
import cssEx from './Experience.module.css'
const Experience=(props)=>{
    return(
        <div className={cssEx.ExperDetail} >
            {props.children}
        </div>
    )
}

export default Experience