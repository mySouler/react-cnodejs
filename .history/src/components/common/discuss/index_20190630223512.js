import React, { unstable_Profiler } from 'react'
import {Link} from "react-router-dom"
import Author from "@/components/common/User/author"
import Time from "@/components/common/Time"


export default ({replies}) => {
console.log("TCL: replies", replies)
  return (
    <div>

    {replies&&replies.length? 
        
          replies.map((item,index)=>
          <div key={index}>
            <Author to={`/user/${item.author.loginname}`} imgUrl={item.author.avatar_url}></Author><div>
              <p><span>{index+1}楼</span><strong>{item.author.loginname}</strong> <Time  timeStr={item.create_at} ></Time> <em>{item.ups.length}</em> </p>
              <p dangerouslySetInnerHTML={{__html:item.content}}></p></div>
          </div>
          )
    :null}

    </div>
  )
}
