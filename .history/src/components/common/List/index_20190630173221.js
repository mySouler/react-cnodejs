
import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import "./list.css"


export default (props) => {
  
  return (
    <Fragment>
      <Link className="link" to={props.to}>
          {props.title}
      </Link>
    </Fragment> 
  )
}
