/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect}  from "react";
import { Tabs } from "antd";
import "./tab.css"
import List from "@/components/views/List"
import {getTopics} from "@/http/api"
import limit from "./limit"



const { TabPane } = Tabs;
let initData = [
    {
        title:"全部",
        key:"all",
    },
    {
        title:"精华",
        key:"good",
    },
    {
        title:"分享",
        key:"share",
    },
    {
        title:"问答",
        key:"ask",
    },
    {
        title:"工作",
        key:"job",
    },

]
export default () => {
  
    const [activeTab,setTab] = useState("all")
    const [listData,setData] = useState([])
    // const [len,setLen] = useState('')
    const [canScroll,setScroll] = useState(0)
    const tabCalBback = (key)=>{
      console.log("TCL: tabCalBback -> keu", key)
      setTab(key)
    }
    useEffect(()=>{
        console.log(1,'cccctt')
        async function getList(params){
            
            try{
              const data = await getTopics(params)
              console.log(data)
              if(data.success){
                
                setData(data.data)
                if(data.data){
                  limit(data.data.length)
                  // setLen(limit()data.data.length)
                }
              }
            }catch(err){
              console.log(err,"getList ---> err")
            }
            
        };
        
        getList({tab:activeTab,page:1,limit:limit()});
        
        
        const handleScroll = () => {
              
            	//变量scrollTop是滚动条滚动时，距离顶部的距离
           		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
           		//变量windowHeight是可视区的高度
           		var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
           		//变量scrollHeight是滚动条的总高度
           		var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
               //滚动条到底部的条件
              if( scrollHeight - (scrollTop + windowHeight) <= 10  ){
                setScroll(Math.random())
                limit(limit()+20)
                // setLen((data)=>data+20)
                console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
              }   
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    },[canScroll,activeTab])
  return (
    <div className="container tabBox">
      <Tabs onTabClick={tabCalBback} activeKey={activeTab} tabPosition = {"right"}>
        {
            initData.map((item,index)=>{
                return <TabPane tab={item.title} key={item.key}>
                            <List listData={listData}/>
                        </TabPane>
            })
        }
      </Tabs>
    </div>
  );
};
