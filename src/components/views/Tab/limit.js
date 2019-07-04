import {useState,useEffect} from "react"

function useLimit(data){
    const [limit,setLimit] = useState(data||"")
    useEffect(()=>{
        setLimit(data)
    },[data])
    return limit
}
export default  useLimit