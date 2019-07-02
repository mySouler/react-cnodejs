/* eslint-disable react-hooks/exhaustive-deps */

import React,{useState,useEffect} from 'react'
import {getTopics} from "@/http/api"
import Dynamic from "@/components/common/User/dynamic"
import "./index.css"

// import { Tag } from 'antd';
// import tag from "./tabTag"
// import Alink from "@/components/common/List"
// import Time from "@/components/common/Time"
// import Author from "@/components/common/User/author"
// import {Link} from 'react-router-dom'






export default ({listData}) => {
  return (
    <div  className="indexList">
          <Dynamic listData={listData} />
    </div>
  )
}
