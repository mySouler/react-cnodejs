/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect,useReducer}  from "react";
import { Tabs } from "antd";
import "./tab.css"
import List from "@/components/views/List"
import {getTopics} from "@/http/api"
// import useLimit from "./limit"



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

const initialState = {
  result:[],
  type:"all"
};
function reducer(state, action) {
  
  const {type } = state;
  if (action.type === 'tick') {
    return {result:action.result,type};
  }  else {
    throw new Error();
  }
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('=============state=======================');
    console.log(state);
    console.log('====================================');
    const { result,type } = state;
    useEffect(()=>{
      (async()=>{
        try {
          const data = await getTopics(type);
          if(data.success){
            dispatch({ type: 'tick',result:data.data });
          }else{
            dispatch({ type: 'tick',result:[] });
          }
      } catch (err) {

      }
      })()
      
    },[dispatch]);
    console.log(result,'response')
  
  return (
    <div className="container tabBox">
      <Tabs onTabClick={(type)=>{ initialState.type=type;dispatch({ type:"tick" });}} activeKey={type} tabPosition = {"right"}>
        {
            initData.map((item,index)=>{
                return <TabPane tab={item.title} key={item.key}>
                          <List listData={result}/>
                      </TabPane>
            })
        }
      </Tabs>
    </div>
  );
};
