import React from 'react'
import logo from '../../asset/icon/logo1.png'
import {Link} from 'react-router-dom'
const Logo =(props)=>{

 
    return(<Link to="/"><img src={logo} width={props.width} height={props.height}  /></Link>)
}
export default Logo