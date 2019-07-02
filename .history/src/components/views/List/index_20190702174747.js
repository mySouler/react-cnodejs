/* eslint-disable react-hooks/exhaustive-deps */

import React,{useState,useEffect} from 'react'
import {getTopics} from "@/http/api"
import Dynamic from "@/components/common/User/dynamic"
import "./index.css"

// import { Tag } from 'antd';
// import tag from "./tabTag"
// import Alink from "@/components/common/List"
// import Time from "@/components/common/Time"
// import Author from "@/components/common/User/author"
// import {Link} from 'react-router-dom'






export default (props) => {
  console.log(props)
    const [listData,setData] = useState([])
    const [len,setLen] = useState(0)
    const [canScroll,setScroll] = useState(0)
  
    useEffect(()=>{
        console.log(1,'cccctt')
        async function getList(params){
            
            try{
              const data = await getTopics(params)
              console.log(data)
              if(data.success){
                setData(data.data)
                if(data.data){
                  setLen(data.data.length)
                }
                
              }
            }catch(err){
              console.log(err,"getList ---> err")
            }
            
        };
        
        getList({...props,page:1,limit:len});
        
        
        const handleScroll = () => {
              
            	//变量scrollTop是滚动条滚动时，距离顶部的距离
           		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
           		//变量windowHeight是可视区的高度
           		var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
           		//变量scrollHeight是滚动条的总高度
           		var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
               //滚动条到底部的条件
              if( scrollHeight - (scrollTop + windowHeight) <= 10 ){
                setScroll(Math.random())
                console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
              }   
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    },[canScroll])
  return (
    <div>
        <ul className="indexList">
          <Dynamic listData={listData} />
        </ul>
    </div>
  )
}
