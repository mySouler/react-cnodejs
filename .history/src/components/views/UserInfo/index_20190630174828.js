import React from 'react'
import {Link} from 'react-router-dom'
import "./index.css"

import Introduce from "@/components/common/User/introduce"
import Trend from "@/components/common/User/trend"

export default (props) => {
  return (
    <div>
      <Introduce></Introduce>
      <Trend></Trend>
      <Trend></Trend>
    </div>
  )
}

