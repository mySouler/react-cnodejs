
import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import "./list.css"


export default ({title,to}) => {
  
  return (
    <Fragment>
      <Link className="link" to={to}>
          {title}
      </Link>
    </Fragment> 
  )
}
