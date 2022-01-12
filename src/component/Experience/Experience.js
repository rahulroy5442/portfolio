import React from 'react'
import cssEx from './Experience.module.css'
const Experience =(props)=>{

return (
    
    <div ref={props.Hearder} className={cssEx.container}>
      <h2 className={cssEx.ExperienceHeader}>Experiences</h2>

 
      <div className={cssEx.experienceContainer}>
      
       <div className={cssEx.scrollBar}>
          <div className={cssEx.ScrollBarSelected} />
        </div>


      <div className={cssEx.Experiences}>
        <ul className={cssEx.ExpContaner}>          
          <li onClick={()=>props.experienceLoader(1)} className={props.experenceLevel.current===1?cssEx.ExperienceSelected:cssEx.ExperiencesNone}><div style={{width:'100%'}}>Tata Consultancy Service</div></li>
          <li onClick={()=>props.experienceLoader(2)} className={props.experenceLevel.current===2?cssEx.ExperienceSelected:cssEx.ExperiencesNone}><div style={{width:'100%'}}>Chegg </div></li>
        </ul>
      </div>

      <div style={{color:'white'}}>
      {props.children}
      </div>

      </div>
    </div>
   
)

}

export default Experience