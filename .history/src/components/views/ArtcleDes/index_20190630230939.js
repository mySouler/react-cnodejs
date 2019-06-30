import React,{useState,useEffect,Fragment} from 'react'
import {Link} from 'react-router-dom'
import {getTopic_id,getUser_info} from '@/http/api'
import UserInfo from "@/components/views/UserInfo"
import Discuss from "@/components/common/Discuss"
import Time from "@/components/common/Time"
import Tag from "@/components/common/Tag"



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
            <div>
                <header>
                    <h2>
                        <span>{artcleData.top?"置顶":null}</span>
                    {artcleData.title}</h2>
                    <p><span>发布于&nbsp;<Time  timeStr={artcleData.create_at} ></Time>&nbsp;•&nbsp;</span>
                    <span>作者<Link to={`/user/${artcleData&&artcleData.author&&artcleData.author.loginname}`}>{artcleData&&artcleData.author&&artcleData.author.loginname}</Link></span>
                    <span> <strong>{artcleData.visit_count}次浏览&nbsp;•&nbsp; </strong></span>
                            
                    <span>来自：<em> <Tag tab={artcleData.tab} /> </em></span>
                    </p>
                </header>
                <div  dangerouslySetInnerHTML={{__html:artcleData.content}}></div>
                <Discuss replies={artcleData.replies}></Discuss>
            </div>
            <div>
            <UserInfo match={{params:{id:match.params.author}}} />
            </div>
            
        </div>
    )
}
