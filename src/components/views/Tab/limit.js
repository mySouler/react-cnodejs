import React,{useState} from "react"

function useLimit(data){
    const [limit,setLimit] = useState(data||'')
    setLimit(data)
    return limit
}
export default  useLimit