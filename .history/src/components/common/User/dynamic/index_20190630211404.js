import React from 'react'
import {Link} from 'react-router-dom'
import "./index.css"
import { Tag } from 'antd';
import Alink from "@/components/common/List"
import Time from "@/components/common/Time"
import Author from "@/components/common/User/author"
import tag from "./tabTag"




export default ({title,listData,show}) => {
  return (
    <div>
        <h2>{title}</h2>
        <ul>
            {
                listData&&listData.map((item,index)=>
               
                    <li className="list" key={index}>
                        {show?<span  className="photo">
                            <Author to={`/user/${item.author.loginname}`} imgUrl={item.author.avatar_url} ></Author>
                        
                        </span>:null}
                        <span className="count">
                            <em>{item.reply_count}</em>/<em>{item.visit_count}</em>
                        </span>
                        <span className="tag">
                            <Tag color={item.tab&&tag[item.tab].color}>{item.tab&&tag[item.tab].title}</Tag>
                        </span>
                        <span className="title">
                        <Alink to={`/topic/${item.id}`} title={item.title} ></Alink>
                        </span>
                        {show?
                        <span className="time">
                            <Time timeStr={item.last_reply_at}></Time>
                        </span>:null}
                    </li>
                )
            }
            
           
        </ul>
    </div>
  )
}

