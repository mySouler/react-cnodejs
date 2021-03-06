import { useState, useEffect, useRef,useCallback } from "react";

import {getTopics} from "@/http/api"



const useBottom = ({action,arg}) => {
    const isScrollToBottom  = () => {
        //变量scrollTop是滚动条滚动时，距离顶部的距离
   		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
   		//变量windowHeight是可视区的高度
   		var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
   		//变量scrollHeight是滚动条的总高度
   		var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
         //滚动条到底部的条件
        if( scrollHeight - (scrollTop + windowHeight) <= 10  ){
            return true
        }else{
            return false
        }   
    } 
    
    useEffect(() => {
        const handleScroll = ()=>{
        
            return isScrollToBottom() && action(arg);
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    },[action, arg])
};



const useLimit = (tab) => {
    console.log(tab,'params')
    const prevParams = useRef(null)
    const [response, setResponse] = useState([]);
    useEffect(() => {
        async function getList(params) {
            console.log(params,'params')
            try {
                const data = await getTopics(params);
                if(data.success){
                    setResponse(data.data);
                }else{
                    setResponse([]); 
                }
            } catch (err) {
                
            }
        }
        if (!(prevParams.current === tab.tab)) {
            prevParams.current = tab.tab
            
            getList(tab)
        }
        
    },[tab])

    return {  response }
};



export default useLimit;
