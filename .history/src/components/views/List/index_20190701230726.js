
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
    const [limit,setLimit] = useState("")
    const [canScroll,setCanScroll] = useState(false)
    
    useEffect(()=>{
        async function getList(limit){
            if(props.tab !== "all"){
              setLimit(20)
            }
            try{
              const data = await getTopics({...props,page:1,...limit})
              console.log(data)
              if(data.success){
                setData(data.data)
                setCanScroll(false)
              }
            }catch(err){
              console.log(err,"getList ---> err")
            }
            
        };

        getList();
        window.onscroll = function(){
       		//变量scrollTop是滚动条滚动时，距离顶部的距离
       		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
       		//变量windowHeight是可视区的高度
       		var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
       		//变量scrollHeight是滚动条的总高度
       		var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;

          console.log(windowHeight,scrollTop,scrollHeight,"getList - hhhh--> err")

           //滚动条到底部的条件
          if( scrollHeight - (scrollTop + windowHeight) <= 10 ){
            setCanScroll(true)
            //写后台加载数据的函数
            console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
            if(canScroll){
              getList({limit:listData.length+20});
            }
          }   
        }
         
    },[])
  return (
    <div>
        <ul className="indexList">
          <Dynamic listData={listData} />
        </ul>
    </div>
  )
}
