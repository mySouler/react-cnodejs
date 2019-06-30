
import React,{Fragment} from 'react'
import {time} from "@/util"



export default ({timeStr}) => {
  console.log('====================================');
  console.log(timeStr);
  console.log('====================================');
  return (
    <Fragment>
      {time(timeStr)}
    </Fragment> 
  )
}
