import React from 'react'
import Author from "@/components/common/User/author"
import Time from "@/components/common/Time"
import {Link} from "react-router-dom"
import zan from "@/assets/img/zan.svg"


export default ({replies}) => {
console.log("TCL: replies", replies)
  return (
    <div>

    {replies&&replies.length? 
        
          replies.map((item,index)=>
          <div key={index}>
            <Author to={`/user/${item.author.loginname}`} imgUrl={item.author.avatar_url}></Author><div>
              <p><span>{index+1}楼</span><Link to={`/user/${item.author.loginname}`} >{item.author.loginname}</Link> <Time  timeStr={item.create_at} ></Time> <em><img src={zan} alt=""/> {item.ups.length}</em> </p>
              <p dangerouslySetInnerHTML={{__html:item.content}}></p></div>
          </div>
          )
    :null}

    </div>
  )
}
