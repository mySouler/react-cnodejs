import React,{Fragment} from 'react'
import { Tag } from 'antd';
import theme from "./tabTag.js"



export default function index({tab}) {
    return (
        <Fragment>
            <Tag color={tab&&theme[tab].color}>{tab&&theme[tab].title}</Tag>
        </Fragment>
    )
}
