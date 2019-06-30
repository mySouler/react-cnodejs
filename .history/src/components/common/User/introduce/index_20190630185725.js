import React from 'react'
import {Link} from 'react-router-dom'
import "./index.css"
import Time from "@/components/common/Time"


export default (props) => {
    console.log('====================================');
    console.log(props,'ind');
    console.log('====================================');
  return (
    <div>
        <ul>
            <li>
                
                <Link to={`/topic/${props.loginname}`}>
                    <img src={props.avatar_url} alt=""/>
                    <span>
                        {props.loginname}
                    </span>
                </Link>
            </li>
            <li>
                <span>积分：</span><strong>{props.score}</strong>
            </li>
            <li>
                <span>Github:</span>
                <Link target="_blank" to={`https://github.com/${props.loginname}`}>{props.loginname}</Link>
                <strong>{}</strong>
            </li>
            <li>
                   
                <span>注册时间:</span><Time  timeStr={props.create_at} ></Time>
            </li>
        </ul>
    </div>
  )
}

