/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect}  from "react";
import { Tabs } from "antd";
import "./tab.css"
import List from "@/components/views/List"
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
  
    const [activeTab,setTab] = useState("all")
    const listData  =  useLimit(activeTab)
    const tabCalBback = (key)=>{
      console.log("TCL: tabCalBback -> keu", key)
      setTab(key)
    }
    useEffect(()=>{
      console.log(1)

    },[activeTab])
  
  return (
    <div className="container tabBox">
      {activeTab}
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
