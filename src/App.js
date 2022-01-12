
import React,{Component } from 'react';
import css from  './App.module.css';
import Layout from './container/hoc/Layout';
import Home from './container/home/home'
import './App.module.css'
import { Route, Routes ,Navigate  } from "react-router-dom";
class App extends Component
{
  
  render()
  {

    const navbar=<Layout>
            <Routes>
             
                <Route path='/' exact element={<Home/>} />
              {/*   <Route path='/about' component={}/>
                <Route path='/service' component={}/>
                <Route path="/status" component={}/> */}
        
           {/*   <Navigate  to='/'/> */}
            </Routes>   
                </Layout> 


    return(
      <div className={css.App}>
       
      {navbar}
      </div>
    )
  }
}


export default App;
