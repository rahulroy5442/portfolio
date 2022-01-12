import React from 'react'
import cssAM from './aboutme.module.css'
const aboutme=(props)=>{


    return(
         <div ref={props.Hearder}  className={cssAM.aboutmeContainer}>
      
      <h2 className={cssAM.Aboutme}>About Me</h2>
      <div className={cssAM.insideText}>
         
          <div  style={{color:'white',width:"100%",marginLeft:'10px'}}>
         {props.children}
          </div> 

         {/*    <div  className={cssAM.AboutMeImg}></div> 
  */}
      </div>
    </div>
      

    
      )

}
export default aboutme
  /* <div className={cssAM.container}>
            
                <div class={cssAM.obj1}>roy</div>
                 <div class={cssAM.obj}>Rahul</div>
                
              </div> */