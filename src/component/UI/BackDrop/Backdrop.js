import React from 'react'

import css from './Backdrop.module.css'

const backDrop=(props)=>
{
    return props.show ?<div className={css.BackDrop} onClick={props.disableIT}>
         </div>:null
}
export default backDrop