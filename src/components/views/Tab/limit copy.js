import { useState, useEffect, useRef,useCallback } from "react";
import { isEqual } from 'lodash'



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



const useLimit = (service, params) => {
    console.log(params,'params')
    const prevParams = useRef(null)
    const [callback, { response }] = useServiceCallback(service)
    console.log(prevParams.current,'params1')
    useEffect(() => {
        if (!isEqual(prevParams.current, params)) {
            prevParams.current = params
            console.log(prevParams.current,'params2')

            callback(params)
        }
    })

    //useBottom({action:callback,params})
    return {  response }
};

const useServiceCallback = service => {
    const [query, setQuery] = useState({ limit: 40 });
    const [response, setResponse] = useState([]);
    const newQuery = {
        ...query,
        limit: query.limit + 20,
    };
    
    const callback = useCallback(
    params => {
        
        async function getList(params) {
            console.log(params,'params')
            try {
                const data = await service(params);
                if(data.success){
                    setResponse(data.data);
                    setQuery(newQuery);
                }else{
                    setResponse([]); 
                }
            } catch (err) {
                
            }
        }
        return getList({...params,...query})
    },[newQuery, query, service]);
    return [callback,{response}];
};

export default useLimit;
