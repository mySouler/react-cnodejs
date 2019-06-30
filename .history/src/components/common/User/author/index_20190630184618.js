
import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'

export default ({imgUrl,to}) => {
  
  return (
    <Fragment>
      <Link to={to} >
        <img src={imgUrl} alt="用户头像" />
      </Link>
    </Fragment> 
  )
}
