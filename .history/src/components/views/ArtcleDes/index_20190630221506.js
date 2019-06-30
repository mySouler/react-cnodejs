import React,{useState,useEffect,Fragment} from 'react'
import {Link} from 'react-router-dom'
import {getTopic_id,getUser_info} from '@/http/api'
import UserInfo from "@/components/views/UserInfo"
import Discuss from "@/components/common/Discuss"

console.log('objecdddddd=========t')


export default ({match})=> {
    console.log('object', match.params)
    const [artcleData,setArtcle] = useState({})
    useEffect(()=>{
        async function getTopic(id,author){
            try{
                // let userInfo    = getUser_info(author)
                let Topic       = getTopic_id(id)
                // let userResult  = await userInfo
                let topicResult = await Topic

                console.log("TCL: getTopic -> topicResult", topicResult)
                // if(userResult.success){
                //     setArtcle(userResult.data)
                // }
                if(topicResult.success){
                    setArtcle(topicResult.data)
                }
            }catch(err){
                console.log(err)
            }
        }
        getTopic(match.params.id,match.params.author)
    },[match.params.id,match.params.author])
    return (
        <div>
            <div  dangerouslySetInnerHTML={{__html:artcleData.content}}></div>

            <div>
            <UserInfo match={{params:{id:match.params.author}}} />
            </div>
            
        </div>
    )
}
