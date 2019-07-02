import React,{useState} from "react"

function Limit(props){
    const [limit,setLimit] = useState(props||'')
    setLimit(props)
    return limit
}
export default  Limit