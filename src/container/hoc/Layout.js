import React,{ Component } from "react";
import Menu from "../../component/navigation/Menu/Menu";
import Social from "../../component/navigation/ScialMediaConnect/Social"
import css from './Layout.module.css'

import Aux from "./Auxiliary";

import Footer from "../../component/navigation/Footer/Footer.js"
class Layout extends Component
{
    render()
    {
    
        return(
        <Aux>  
                     
           <div className={css.Layout}>
          
               {/*  <div className={css.hiddeSM}><Social/> </div> 
                */}
                {/* <Menu/> */}
                
              {this.props.children}
              
               <Footer/>  
           </div>
        </Aux>
            

        )
    }
}

export default Layout