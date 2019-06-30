import React from 'react'
import "./index.css"
import Alink from "@/components/common/List"
import Time from "@/components/common/Time"
import Author from "@/components/common/User/author"
import Tag from "@/components/common/Tag"




export default ({title='',listData,photo=true,count=true,tag=true,art=true,time=true}) => {
  return (
    <div>
        {title?<h2>{title}</h2>:null}
        <ul>
            {
                listData&&listData.map((item,index)=>
                    <li className="list" key={index}>
                        {photo?<span  className="photo">
                            <Author to={`/user/${item.author.loginname}`} imgUrl={item.author.avatar_url} ></Author>
                        </span>:null}
                        {count?<span className="count">
                            <em>{item.reply_count}</em>/<em>{item.visit_count}</em>
                        </span>:null}
                        {tag?<span className="tag">
                            {/* <Tag color={item.tab&&theme[item.tab].color}>{item.tab&&theme[item.tab].title}</Tag> */}
                            <Tag tab={item.tab} />
                        </span>:null}
                        {art?<span className="title">
                            <Alink to={ { pathname: `/topic/${item.id}/${item.author.loginname}`} }  title={item.title} ></Alink>
                        </span>:null}
                        {time?
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

