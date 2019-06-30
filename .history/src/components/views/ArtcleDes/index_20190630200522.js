import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getTopic_id} from '@/http/api'
import Introduce from "@/components/common/User/introduce"


export default ({match})=> {
    const [artcleData,setArtcle] = useState({})
    useEffect(()=>{
        async function getTopic(id){
            try{
                let data = await getTopic_id(id)
                console.log("TCL: getTopic -> data", data)
                if(data.success){

                }
            }catch(err){
                console.log(err)
            }
        }
        getTopic(match.params.id)
    },[])
    return (
        <div>
            <Introduce {...userInfo} />
            
        </div>
    )
}
