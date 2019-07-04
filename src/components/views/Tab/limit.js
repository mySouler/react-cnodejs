import {useState,useEffect} from "react"
import {getTopics} from "@/http/api"


function useLimit({keyVal}){
    const  [listData,setList] = useState([])
    useEffect(()=>{
        
        async function getList(params){
            
            try{
              const data = await getTopics(params)
              console.log(data)
              if(data.success){
                
                setList(data.data)
                if(data.data){
                  
                }
              }
            }catch(err){
              console.log(err,"getList ---> err")
            }
            
        };
        
        getList({tab:keyVal,page:1,limit:''});
        
        
        const handleScroll = () => {
              
            	//变量scrollTop是滚动条滚动时，距离顶部的距离
           		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
           		//变量windowHeight是可视区的高度
           		var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
           		//变量scrollHeight是滚动条的总高度
           		var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
               //滚动条到底部的条件
              if( scrollHeight - (scrollTop + windowHeight) <= 10  ){
                
                // dong = changeLimit(changeLimit()+20)
                console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
              }   
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    },[keyVal])
    return listData
}
export default  useLimit