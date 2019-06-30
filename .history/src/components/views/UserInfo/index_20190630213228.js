import React,{useState,useEffect} from 'react'
import "./index.css"

import Introduce from "@/components/common/User/introduce"
import Trend from "@/components/common/User/dynamic"
import { getUser_info } from '@/http/api';


export default ({match}) => {
  
  const [userInfo,setInfo] = useState({})
  useEffect(()=>{

    async function getUserData(id){
      try{
        let data = await getUser_info(id)
        if(data.success){
          console.log(data.data);

          setInfo(data.data)
        }else{

        }
        console.log(data,'data');
      }catch(err){
        console.log('===============userData===error==================');
        console.log(err);
        console.log('==================userData===error===============');
      }

    }
    getUserData(match.params.id)
  },[match.params.id])
  return (
    <div className="container">
      <Introduce {...userInfo} />
      <Trend listData={userInfo.recent_topics} title={'最近创建的话题'} tag={false} count={false} />
      <Trend listData={userInfo.recent_replies} title={'最近参与的话题'} tag={false} count={false} />
    </div>
  )
}

