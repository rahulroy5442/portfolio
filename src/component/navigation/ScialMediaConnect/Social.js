import React, {useEffect, useState,useRef,useCallback,useMemo,createRef } from "react";
import Account from "./account/account";
import iconfacebook from "../../../asset/icon/facebook.png" 
import icontwitter from "../../../asset/icon/twitter.png" 
import iconlinkedin from "../../../asset/icon/linkedin.png"
import iconGithub from "../../../asset/icon/github.png"
import Aux from "../../../container/hoc/Auxiliary";
import css from './Social.module.css'

import Logo from "../../../component/Logo/Logo"

const Social =()=>
{
   const [getCompoent,setComponent]=useState(null)

   useEffect(()=>{
    setComponent(<Aux>
    <div className={css.logo}><Logo width={"50px"}  height={"50px"}/></div> 
         <ul className={css.ItemFlow}>
        <Account link="https://github.com/rahulroy5442"><img src={iconGithub} title="github" alt="Github" width="30" height="30"/></Account> 
        <Account link="https://www.facebook.com/rahulroy5442/"><img src={iconfacebook} title="facebook" alt="facebook" width="30" height="30"/></Account> 
        <Account link="https://twitter.com/Rahulroy5442"><img src={icontwitter} title="twitter" alt="twitter" width="30" height="30"/></Account> 
        <Account link="https://www.linkedin.com/in/rahul-roy-a1414b171/"><img src={iconlinkedin} title="linkedin" alt="linkedin" width="30" height="30"/></Account>
   </ul>
   <div className={css.verticalLine}></div>
    </Aux>)
   },[])

   useEffect(()=>{
    if(getCompoent)
    {
        document.documentElement.style.setProperty('--Social-Value','0px')
        document.documentElement.style.setProperty('--logo-opa','1')
    }
   },[getCompoent])
    
       
        return(
            <Aux>
            <div className={css.container}>
                
           
            {getCompoent}
           
            </div>
            </Aux>
        )
                
        
    
}
export default Social