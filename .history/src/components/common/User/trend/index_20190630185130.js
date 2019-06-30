import React from 'react'
import {Link} from 'react-router-dom'
import "./index.css"
import Alink from "@/components/common/List"
import Time from "@/components/common/Time"
import Author from "@/components/common/User/author"




export default ({title,listData}) => {
    console.log('object2', listData)
  return (
    <div>
        <h2>{title}</h2>
        <ul>
            {
                listData&&listData.map((item,index)=>
                    <li className="list" key="index">
                        <span className="photo">
                            <Author to={`/user/${item.author.loginname}`} imgUrl={item.author.avatar_url} ></Author>
                        
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

