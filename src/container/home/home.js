import React,{ Component,useEffect, useState,useRef,useCallback,useMemo,createRef } from "react";
import css from './home.module.css'
import WebFont from 'webfontloader';
import Aux from "../hoc/Auxiliary";

import Experience from '../../component/Experience/ExperienceDetail.js'
import {connect} from 'react-redux'
import * as action from '../../store/action/ActionHolder.js'

import About from '../../component/AboutMe/aboutme.js'
import ExperienceHolder from '../../component/Experience/Experience.js'

import {gsap, ScrollTrigger, MotionPathPlugin} from 'gsap/all'
import cssScroll from './animationonScroll.module.css'
import axios from 'axios'
const Home = (props)=>{  
  const [experenceText,setexperenceText]=useState()
  const [InitialComponent,InitialComponentSeter]=useState(null)
  
  const techStack=useRef()
  const whatCanDo=useRef()
  const portholder=useRef()
  const scrollchecker=useRef()  
  const experenceLevel=useRef(1)




useEffect(async ()=>{
  
  

        document.documentElement.style.setProperty('--SlidShow-front','0%') 
        document.documentElement.style.setProperty('--SlidShow-SupportBox','0%')
        document.documentElement.style.setProperty('--SlidShow-Opcity','1') 
        const Midd=  portholder
        const scrollcheckerTM= scrollchecker
        const PP= techStack
        const refWCD=  whatCanDo
        let sections = gsap.utils.toArray(PP.current.children);
        gsap.registerPlugin(ScrollTrigger, MotionPathPlugin); 

          console.log("A")
          WebFont.load({
            google: {
              families: ['Droid Sans', 'Chilanka','Roboto Mono','Alumni Sans','Imperial Script']
            }
          });
         
         
          experienceLoader(1)
          

  




  const rotateOnscroll={
      autoRotate:true,
      path:[{rotationY:180}],
      curviness: 0
    }




      const timeline=gsap.timeline({

      scrollTrigger: {
        trigger:scrollcheckerTM.current,
        start: 'top ',
        end: '+=500 ',
        pin: true,
        pinSpacing :true,
        scrub: 1,
        snap: 1,
        markers:true,

        toggleActions:"play none none none"
      },
      defaults:{duration:0.1, ease:'none'}

      })
    timeline.set(Midd.current, {rotationY:0})      

    timeline.add(gsap.to(
    Midd.current,0.2,{
    motionPath:rotateOnscroll,
    ease:'Power1.easeInOut'
    }))  









      gsap.utils.toArray(refWCD.current.children).forEach((section, i) => {
      //  console.log(section)


                gsap.to(section,2, {
                  transform: `translateY(50%)`,
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  scrub: true,
                  markers:true,
                  start:()=>{ 
                    
                  return(`+=${section.clientHeight-window.innerHeight}px top`)},
                  end:'bottom top'

                }
              }) 



      });




      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: PP.current,
            pin: true,
            pinSpacing:true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            markers:true,
            
            end: "+="+2000
      }
      })





    },[])

    function JS(){
      axios.get(`https://gorest.co.in/public/v1/users`)
      .then(res => console.log(res))
    
      console.log("JHJD")
    }


  const experienceLoader=(value)=>{
    
    experenceLevel.current=value
    if(value==1)
    {
      document.documentElement.style.setProperty('--scroll-height','0px')
      setexperenceText(
        <Experience>
          <ul style={{fontFamily:"Alumni Sans"}}>
         <li>Working with USA based client ,as I was in deployment and production support team I used to solve any environment related issue within the server ,worked in Application server such
          as IBM websphere and server support with Unix/Linux command line interface.</li> 
          <br/>
          <li>Currently working in BPM and ODM (Both are Product of IBM) environment support team.</li>

        </ul>
        </Experience>
      )
    }
    else if(value==2)
    {
      document.documentElement.style.setProperty('--scroll-height','40px')
      setexperenceText(<Experience>
        <ul style={{fontFamily:"Alumni Sans"}}>
          <li>Worked in chegg as a subject matter expert where we used to get different problem posted by student and we had to solved them within 2hour.</li>

          <li>I used to be a subject matter expert of computer science and engineering field.</li> 
        </ul>
        
        </Experience>)
    }
  
  }
 
 
  
  return (
            
    <Aux> 
    
      <div className={css.container}>

   <div className={css.home}/>
  
    
    <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>  
    
            <div className={css.textProperty}>
                
            <div className={css.topnotch}>
            <h4 style={{fontWeight:'400'}}>Hi, my name is</h4>
              <div className={css.header1}>Rahul Roy<br/></div>
              <h2 style={{ fontFamily: 'Roboto Mono'}} className={css.header2} >I build web application with MERN stack technology.</h2>
                <h5 className={css.header3}>
                I’m a software engineer specializing in building web application with exceptional digital experiences. 
                Currently, I’m working in <b>Tata Consultancy Service</b> as a full time software Engineer
                </h5>
            </div>
          <div className={css.containerSer}>
            <div className={css.ServiceContainer}>
              <h2>Technical Support</h2>
              <div className={css.techStyle}>
              <div className={css.verticalBar}></div> 
                <div className={css.Positioning}>
                <h3>UI/UX Design</h3>
              <h3>Server-Side development</h3>
              <h3>Data-Base Mangement </h3>
              <h3>Cloud Computing Service</h3>
                </div>
              </div>
            </div>
                <h2 style={{display:'flex',justifyContent:'center',alignItems:'center',width:'50px',height:'50px',borderRadius:'50%',backgroundColor:'black',color:'white'}}>OR</h2>
              
              <div className={css.CustomizeBottom}>Customize your Requirement</div>
              
              
              </div>
          </div>
      



      <Aux>
      {  useMemo(()=>{return (<div className={css.testing}  ref={scrollchecker} >

        
          <div className={cssScroll.container} >
                <div className={cssScroll.Midd} ref={portholder}>
                <div className={cssScroll.obj1}>
                      <About >Hello! My name is Rahul and I like to design create and develop software. My interest in web development started back in 2020 when I decided to try creating web application with my basic knowledge.
                        <br/><br/>Fast-forward to today, and I’ve had the privilege of working at Tata consultancy service,Chegg as a subject matter expert, as I am new in the field of technology so I looking for more new opportunity to grow in the field of IT.
                        <br/><br/>Here are a few technologies I’ve been working with recently:
    
                        <ul style={{margin:'0px'}}>
                          <li> JavaScript (ES6+,ES5)</li>
                          <li>React</li>
                          <li>Node js</li>
                          <li>Amazon webservice(AWS)</li>
                        </ul>
                        </About>
                </div>

                    <div className={cssScroll.obj}> 
                        <ExperienceHolder
                  
                        experienceLoader={experienceLoader} 
                        experenceLevel={experenceLevel}  
                        >
                          
                          {experenceText}
                        </ExperienceHolder> 
                    </div>
                </div>
          </div>

        
        </div>)},[experenceText])}
       
    </Aux>
    
   
    </div>

      
        {useMemo(()=>{
          return (<div ref={whatCanDo} className={css.whatCanDo}>
          
           <div className={css.ChildBox}>
            
               <div className={css.HeaderHolder}>
               <div className={css.ChildBoxChild}>
                    How Can I<br/>
                    Help in UI/UX
                  </div>

              

                   <div className={css.boxForImformation}>
                      <div>
                      <h1>Build</h1>
                      <h1>Develop <span>&</span></h1>
                      <h1>Create Experiences</h1> 
                      <h2>Are You Excited as me ,then</h2>
                      <h2> 
                      Drive the technology with me 
                      <br/>
                      <span style={{color:'white'}}>& &nbsp;</span>
                      <span style={{color:'#05386B'}}>
                        Let get started with</span> 
                      <span style={{color:'black',fontSize:'35px'}}>&nbsp;React JS</span>
                      
                      </h2>
                      </div>


                       <p><span style={{fontWeight:'700'}}>I am a</span> <span style={{color:"blue",fontWeight:"bold"}}>React JS Developer </span>
                      <br/>
                      <span style={{color:'white',fontWeight:'700',fontSize:'30px'}}>&</span>
                      <br/>

                      <span style={{fontWeight:'700'}}>Many more.</span><br/>
                      <span style={{color:'black',fontWeight:'700'}}>With a self taught</span> <span style={{color:'green',fontWeight:'900'}}>Experience</span> 
                      <span style={{color:"#05386B",fontWeight:"bold"}}>&nbsp;<span style={{color:'white',fontSize:'30px',fontWeight:'700px'}}>&</span> skill set that will make your website more appealing <span style={{color:'white',fontSize:'30px',fontWeight:'700px'}}>&</span> <span style={{color:'red'}}>  beautiful as you want.</span></span>&nbsp;
                      
                      </p> 

                   </div>
               </div>
              
                  
                   <div className={css.boxes}>
                  <div className={css.childBoxContainer}>
                    <div style={{paddingLeft:'20px',marginTop:'5%',boxSizing:'border-box',width:'100%',fontWeight:'600'}}>React JS Service</div> 
                    
                    <ul className={css.ReactService}>
                      <li>
                      You can outsource React development to us, and we'll build a project from scratch for you 
                      </li>
                      <li>
                        Scalable and Reliable Website 
                      </li>

                      <li>
                        Mobile Responsive
                      </li>

                      <li>
                        Clean and well maintained code
                      </li>

                      <li>
                        Customizable Website 
                      </li>

                      <li>
                        Continuous Update from community 
                      </li>

                    </ul>

                  </div>

                  <div className={css.childBoxContainer}>
                  <div style={{padding:'0px 10px 10px 10px',marginTop:'5%',boxSizing:'border-box',width:'100%',fontWeight:'600'}}>
                  Finding online clients doesn't have to be so hard</div>
                

                    <div style={{fontSize:'15px',paddingLeft:'10px',paddingTop:'0px'}}>As a business point of view you should have a website so that client can understand you without speaking a word of your own.</div><br/>
                    
                    <div style={{fontSize:'15px',paddingLeft:'20px'}}>Point you are worried about</div>

                    <ul className={css.crossBar}>

                      <li>
                      Nobody will understand your business
                      </li>

                      <li>
                      Your website doesn't feel like you and you kind of hope no one sees it.
                      </li>

                      <li>
                      You're worried the flexibility of having an online business will never be a reality for you.
                      </li>

                      
                      </ul>
                  </div>
                  <div className={css.childBoxContainer}>
                    
                  <div style={{padding:'0px 10px 10px 10px',marginTop:'5%',boxSizing:'border-box',width:'100%',fontWeight:'600'}}>Out of the box</div>
                

                    <div style={{fontSize:'15px',paddingLeft:'10px',paddingTop:'0px'}}>You are unique so don't you think that we can make a difference</div><br/>
                    
                    <div style={{fontSize:'15px',paddingLeft:'20px'}}>Key things that will be required to start a project</div>

                    <ul className={css.OutBox}>

                      <li>
                        Your theme of the business.
                      </li>

                      <li>
                        To develop faster , I need design so to get overall overview of the site.
                        E.g Figma, Adobe XD,etc
                      </li>

                      <li>
                        Better communication from start to end
                      </li>

                      <li>
                        Resources gettering.
                      </li>
                      
                      </ul>


                  </div>
                
             </div>
          
                   
          </div>
          


           <div className={css.ChildBox}>


        
            <div className={css.transitionState}>
              <div></div>
              <div></div>
            </div>
            
            <div className={css.transitionState}>
            <div></div>
            <div></div>
            </div>
            
            <div className={css.transitionState}>
            <div></div>
            <div></div>
            </div>
            
          </div>
          


          <div className={css.ChildBox}>
      
          </div>    


        </div>)},[])}
      

                 <div ref={techStack} className={css.techStack}>
                  <div>
                  </div>
                  
                  <div>
                  </div>

                  <div>
                  </div>
                  
                </div> 
        </div>
    </Aux>
 )
}


const dispatcher=(dispatch)=>{
   return{
       UpdateHeader:(value)=>dispatch(action.UpdatePos(value))
       
   }
}

export default connect(null,dispatcher)(Home)