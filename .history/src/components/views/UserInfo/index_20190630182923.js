import React,{useState,useEffect} from 'react'
import "./index.css"

import Introduce from "@/components/common/User/introduce"
import Trend from "@/components/common/User/trend"
import { getUser_info } from '@/http/api';
import { log } from 'handlebars';


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
    <div>
      <Introduce {...userInfo} />
      <Trend {...userInfo} title={'最近创建的话题'}/>
      <Trend {...userInfo} title={'最近参与的话题'}/>
    </div>
  )
}

