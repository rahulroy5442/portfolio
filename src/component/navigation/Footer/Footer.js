import React from 'react'
import css from './Footer.module.css'
import github from '../../../asset/icon/github.png'
const Footer=()=>{

    return(
        <div className={css.container}>
                Designed & Built by Rahul Roy
                <a href="https://github.com/rahulroy5442/Burger-App" target="_blank"><img src={github} width="50px" height="50px" /></a>
        </div>
    )
}
export default Footer