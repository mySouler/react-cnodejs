import React,{useState,useEffect} from 'react'
import "./index.css"

import Introduce from "@/components/common/User/introduce"
import Trend from "@/components/common/User/trend"
import { getUser_info } from '@/http/api';


export default (props) => {
  const [userInfo] = useState([])
  useEffect(()=>{
    async function getUserData(){
      try{
        let data = await getUser_info()

      }catch(err){
        console.log('===============userData===error==================');
        console.log(err);
        console.log('==================userData===error===============');
      }

    }
  },[])
  return (
    <div>
      <Introduce></Introduce>
      <Trend></Trend>
      <Trend></Trend>
    </div>
  )
}

