import React,{Fragment} from 'react'
import { Tag } from 'antd';
import theme from "./tabTag.js"



export default function index(props) {
    return (
        <Fragment>
            <Tag color={props.tab&&theme[props.tab].color}>{props.tab&&theme[props.tab].title}</Tag>
        </Fragment>
    )
}
