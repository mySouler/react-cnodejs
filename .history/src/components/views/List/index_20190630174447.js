
import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import "./list.css"
import {getTopics} from "@/http/api"
import { Tag } from 'antd';
import tag from "./tabTag"
import Alink from "@/components/common/List"
import Time from "@/components/common/Time"



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
                    <Link to={`/user/${item.author.loginname}`}>
                      <img src={item.author.avatar_url} alt="用户头像" />
                    </Link>
                  </span>
                  <span className="count">
                    <em>{item.reply_count}</em>/<em>{item.visit_count}</em>
                  </span>
                  <span className="tag">
                    <Tag color={item.tab&&tag[item.tab].color}>{item.tab&&tag[item.tab].title}</Tag>
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
