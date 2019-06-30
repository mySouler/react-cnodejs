import React from 'react'
import {Link} from 'react-router-dom'
import "./index.css"

export default (props) => {
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
                <span>积分：</span><strong></strong>
            </li>
            <li>
                <span>Github:</span><strong></strong>
            </li>
            <li>
                <span>注册时间:</span><strong></strong>
            </li>
        </ul>
    </div>
  )
}

