import React,{useState} from "react";
import { Tabs } from "antd";
import "./tab.css"
import List from "@/components/views/List"


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
    
    const [tabPosition,setTabPos] = useState("right")
    

  return (
    <div className="container tabBox">
      <Tabs tabPosition = { tabPosition }>
        {
            initData.map((item)=>{
                return <TabPane tab={item.title} key={item.key}>
                            <List tab={item.key}/>
                        </TabPane>
            })
        }
      </Tabs>
    </div>
  );
};
