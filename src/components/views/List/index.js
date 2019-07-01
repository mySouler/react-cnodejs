
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
    
    useEffect(()=>{
        async function getList(){
            if(props.tab !== "all"){
              setLimit(20)
            }
            try{
              const data = await getTopics({...props,page:1,limit})
              console.log(data)
              if(data.success){
                setData(data.data)
              }
            }catch(err){
              console.log(err,"getList ---> err")
            }
            
        };

        getList();
    },[limit, props, props.tab])
  return (
    <div>
        <ul className="indexList">
          <Dynamic listData={listData} />
        </ul>
    </div>
  )
}
