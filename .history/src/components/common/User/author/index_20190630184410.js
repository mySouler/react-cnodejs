
import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import "./list.css"


export default ({url,to}) => {
  
  return (
    <Fragment>
      <Link to={to} >
        <img src={url} alt="用户头像" />
      </Link>
    </Fragment> 
  )
}
