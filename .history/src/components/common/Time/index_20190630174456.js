
import React,{Fragment} from 'react'
import {time} from "@/util"



export default ({timeStr}) => {
 
  return (
    <Fragment>
      {time(timeStr)}
    </Fragment> 
  )
}
