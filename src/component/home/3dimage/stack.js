import React,{Component} from "react"
import css from './stack.module.css'
class Stack extends Component{

    render()
        {
            return (

                
<div className={css.flipCard}>
  <div className={css.flipCardInner}>
   {this.props.children}
  </div>
</div>

                
            );
        }

}
export default Stack