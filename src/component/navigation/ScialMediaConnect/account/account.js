import React, { Component } from "react";

import {NavLink} from 'react-router-dom'
import css from './account.module.css'
class Account extends Component
{
    render()
    {
        return(
            <li className={css.container}>
             
                <a href={this.props.link} target="_blank" >{this.props.children}</a>
            </li>
        )
                
        
    }
}
export default Account