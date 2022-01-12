import React from 'react'

import css from './NavItem.module.css'


import {NavLink} from 'react-router-dom'
const NavItem=(props)=>{
    return (<li className={props.customStyle} onClick={props.scrollFun}>
            
           {/*  <NavLink to={props.link}
            exact={props.exact}
            className={({ isActive }) => isActive ? props.ActiveStyle : null} >{props.children}</NavLink> */}
            
                {props.children}
            
    </li>)
}
export default NavItem