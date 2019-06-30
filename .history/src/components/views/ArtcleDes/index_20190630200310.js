import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getTopic_id} from '@/http/api'

export default ({match})=> {
    const [artcleData,setArtcle] = useState({})
    useEffect(()=>{
        async function getTopic_id(id){
            try{
                let data = await getTopic_id(id)
                if(data.success){

                }
            }catch(err){
                console.log(err)
            }
        }
    },[])
    return (
        <div>
            
        </div>
    )
}
