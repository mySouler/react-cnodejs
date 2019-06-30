import React,{useState,useEffect} from 'react'
import "./index.css"

import Introduce from "@/components/common/User/introduce"
import Trend from "@/components/common/User/trend"
import { getUser_info } from '@/http/api';


export default ({match}) => {
  const [userInfo] = useState([])
  useEffect(()=>{
    async function getUserData(id){
      try{
        let data = await getUser_info(id)
        console.log(data,'data');
      }catch(err){
        console.log('===============userData===error==================');
        console.log(err);
        console.log('==================userData===error===============');
      }

    }
    getUserData(match.params.user)
  },[match.params.user])
  return (
    <div>
      <Introduce></Introduce>
      <Trend></Trend>
      <Trend></Trend>
    </div>
  )
}

