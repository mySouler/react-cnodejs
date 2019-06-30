import React from 'react'
import {Link} from 'react-router-dom'
import "./index.css"
import Alink from "@/components/common/List"
import Time from "@/components/common/Time"



export default ({title,recent_topics,recent_replies}) => {
    console.log('object2', recent_topics)
    console.log('object', recent_replies)
  return (
    <div>
        <h2>{title}</h2>
        <ul>
            <li className="list" key="2">
                  <span className="photo">
                    {/* <Link >
                      <img src={props} alt="用户头像" />
                    </Link> */}
                  </span>
                  <span className="title">
                    {/* <Alink to={`/topic/${props}`} title={props} ></Alink> */}
                  </span>
                  <span className="time">
                    <Time></Time>
                  </span>
            </li>
           
        </ul>
    </div>
  )
}

