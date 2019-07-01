import React from 'react'
import {Link} from 'react-router-dom'
import "./index.css"
import Time from "@/components/common/Time"
import "./index.css"

export default (props) => {
    
  return (
    <div className="introduce">
        <ul>
            <li>
                
                <Link to={`/user/${props.loginname}`}>
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
                <span>Github：</span>
                <a   rel="nofollow me noopener noreferrer" target="_blank"  href={`https://github.com/${props.loginname}`} >{props.loginname}</a>
            </li>
            <li>
                <span>注册时间：</span><Time  timeStr={props.create_at} ></Time>
            </li>
        </ul>
    </div>
  )
}

