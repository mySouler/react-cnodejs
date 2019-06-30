import React from 'react'
import {Link} from 'react-router-dom'
import "./index.css"
import Alink from "@/components/common/List"
import Time from "@/components/common/Time"



export default ({title,listData}) => {
    console.log('object2', listData)
  return (
    <div>
        <h2>{title}</h2>
        <ul>
            {
                listData.map((item)=>
                    <li className="list" key="2">
                        <span className="photo">
                        <Link >
                            <img src={item.author.avatar_url} alt="用户头像" />
                        </Link>
                        </span>
                        <span className="title">
                        <Alink to={`/topic/${item.id}`} title={item.title} ></Alink>
                        </span>
                        <span className="time">
                            <Time timeStr={item.last_reply_at}></Time>
                        </span>
                    </li>
                )
            }
            
           
        </ul>
    </div>
  )
}

