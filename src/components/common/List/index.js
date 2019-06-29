
import React,{useState,useEffect} from 'react'
import "./list.css"
import {getTopics} from "@/http/api"
import { Tag } from 'antd';
import tag from "./tabTag"
import {time} from "@/util"


export default (props) => {
  console.log(props)
    const [listData,setData] = useState([])
    const [limit,setLimit] = useState("")
    
    useEffect(()=>{
        async function getList(){
            if(props.tab !== "all"){
              setLimit(20)
            }
            try{
              const data = await getTopics({...props,page:1,limit})
              console.log(data)
              if(data.success){
                setData(data.data)
              }
            }catch(err){
              console.log(err,"getList ---> err")
            }
            
        };

        getList();
    },[limit, props, props.tab])
  return (
    <div>
        <ul>
          {
            listData.map((item,key)=>
                <li className="list" key={key}>
                  <span className="photo">
                    <img src={item.author.avatar_url} alt="用户头像" />
                  </span>
                  <span className="count">
                    <em>{item.reply_count}</em>/<em>{item.visit_count}</em>
                  </span>
                  <span className="tag">
                    <Tag color={item.tab&&tag[item.tab].color}>{item.tab&&tag[item.tab].title}</Tag>
                  </span>
                  <span className="title">
                    {item.title}
                  </span>
                  <span className="time">
                    {time(item.last_reply_at)}
                  </span>
                </li>
            )
          }
        </ul>
    </div>
  )
}
