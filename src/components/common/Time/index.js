
import React,{Fragment} from 'react'
import {time} from "@/util"



export default ({timeStr}) => {
  
  return (
    <Fragment>
      <strong>
      {time(timeStr)}
      </strong>
    </Fragment> 
  )
}
