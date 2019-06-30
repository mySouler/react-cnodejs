import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getTopic_id} from '@/http/api'
import UserInfo from "@/components/views/UserInfo"

console.log('objecdddddd=========t')


export default ({match})=> {
    console.log('object', match.params)
    const [artcleData,setArtcle] = useState({})
    useEffect(()=>{
        async function getTopic(id){
            try{
                let data = await getTopic_id(id)
                console.log("TCL: getTopic -> data", data)
                if(data.success){
                    setArtcle(data.data)
                }
            }catch(err){
                console.log(err)
            }
        }
        getTopic(match.params.id)
    },[])
    return (
        <div>
            <div>
                    88888
            </div>
            <div>
            </div>
            
        </div>
    )
}
