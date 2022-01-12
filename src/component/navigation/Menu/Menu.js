import React, { Component } from "react";
import NavItem from "./NavItems/NavItem";
import css from './Menu.module.css'

import Aux from '../../../container/hoc/Auxiliary.js'
import BackDrop from '../../UI/BackDrop/Backdrop.js'
import {connect} from 'react-redux'
class Menu extends Component{

    state={
        hidden:true
    }
    
    componentDidMount()
    {
        
        let lastScroll=0;
        let runOnlyOneUp=false
        let runOnlyOneDown=true
        
        window.addEventListener('scroll', (event) => {
            const currentScroll = window.pageYOffset;
            if(currentScroll==0)
            {
                document.documentElement.style.setProperty('--Menu-HO','0px')
            }
            if(lastScroll<currentScroll && runOnlyOneDown)
                {
                    
                     runOnlyOneUp=true
                     runOnlyOneDown=false
                     document.documentElement.style.setProperty('--Menu-HO','-50px')
                }
                if(lastScroll>currentScroll && runOnlyOneUp) 
                {
                    
                    runOnlyOneUp=false
                    runOnlyOneDown=true
                    document.documentElement.style.setProperty('--Menu-HO','-10px')
                }
                
                lastScroll=currentScroll  
                
               
        // ...
      });
    }


   
      
    hideMenu=()=>{

        if(this.state.hidden)
        {
            document.documentElement.style.setProperty('--Overflow-type','hidden')
        }
        else
        {
            document.documentElement.style.setProperty('--Overflow-type','auto')
        }
            this.setState((prev)=>{
            
            return {hidden:!prev.hidden} })
    
    }

    ScrollDown=(value)=>{
    
        
          window.scrollTo({
            top: value-50,
            behavior: "smooth",
            // You can also assign value "auto"
            // to the behavior parameter.
          });


      }

    render()
    {
      
        const MenuDrop=[css.Menu]

        const DropList=[css.navItems]
        
        const crossMenu1=[css.crossMenu1]
        const crossMenu2=[css.crossMenu2]
        const crossBar=[css.crossBar]
        if(!this.state.hidden)
        {
            crossMenu1.push(css.crossMenuAnimation1)
            crossMenu2.push(css.crossMenuAnimation2)
            crossBar.push(css.crossBartrue)
        }
        if(this.state.hidden)
        {
         
            MenuDrop.push(css.MenuHide)
            DropList.push(css.navItemsNone)
            
            
        }

            const childElement=<Aux>
            <NavItem scrollFun={()=>this.ScrollDown(this.props.About.offsetTop)} link='/' exact customStyle={css.NavigationItem} ActiveStyle={css.active}>About me</NavItem>
            <NavItem scrollFun={()=>this.ScrollDown(this.props.Experience.offsetTop)} link='/about' customStyle={css.NavigationItem} ActiveStyle={css.active}>Experience</NavItem>
            <NavItem scrollFun={()=>this.ScrollDown(this.props.Experience.offsetTop)} link='/about' customStyle={css.NavigationItem} ActiveStyle={css.active}>Project</NavItem>
            <NavItem scrollFun={()=>this.ScrollDown(this.props.Experience.offsetTop)} link='/about' customStyle={css.NavigationItem} ActiveStyle={css.active}>Contact</NavItem>
            </Aux>

        return(
                <Aux> 
                    <BackDrop show={!this.state.hidden}  disableIT ={this.hideMenu} />

                 
                    <div className={crossBar.join(" ")} onClick={this.hideMenu}>
             
                            <div className={crossMenu1.join(" ")}></div>
                 
                 
                            <div className={crossMenu2.join(" ")}></div>
                 
                    </div>

                    <div className={MenuDrop.join(" ")} > 

                                 {/*      <div className={MenuIndicator.join(" ")}>Menu</div> */}
                     <ul className={DropList.join(" ")}>
 
                         {!this.state.hidden?childElement:null}
                         
                     </ul>
                 
                 
                    </div>
 
 
 
                 <div className={css.horizontalMenu}>
                     
                 <ul className={css.ulContainer}>
                        {childElement}
                 </ul>

                </div></Aux>
           
        )
    }
}
const states=(state)=>{
    return{
        About:state.Header.About,
        Experience:state.Header.Experience,

     }
  }

export default connect(states)(Menu)