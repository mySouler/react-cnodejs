import React from 'react'
import {Link} from "react-router-dom"
import Author from "@/components/common/User/author"


export default ({replies}) => {
console.log("TCL: replies", replies)
  return (
    <div>

    {replies&&replies.length? 
        
          replies.map((item,index)=>
          <div key={index}>
            <Author to={`/user/${item.author.loginname}`} imgUrl={item.author.avatar_url}></Author><div>
              <p><span>{item.author.avatar_url}</span><strong></strong><span></span> <em></em> </p>
              <p></p></div>
          </div>
          )
    :null}

    </div>
  )
}
