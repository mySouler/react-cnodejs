import React,{useState} from "react"

function Limit(data){
    const [limit,setLimit] = useState(data||'')
    setLimit(data)
    return limit
}
export default  Limit