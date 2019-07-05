/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect}  from "react";
import { Tabs } from "antd";
import "./tab.css"
import List from "@/components/views/List"
import {getTopics} from "@/http/api"
import useLimit from "./limit"



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
  
    const [tab,setTab] = useState("all")
    const tabCalBback = (key)=>{
      setTab(key)
    }
    // const { response = [] } = useLimit(getTopics, {
    //   tab
    // });
    const { response = [] } = useLimit({
      tab
    });
    console.log(response,'response')
    const listData  = response || [];
    
    
  return (
    <div className="container tabBox">
      <Tabs onTabClick={tabCalBback} activeKey={tab} tabPosition = {"right"}>
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
