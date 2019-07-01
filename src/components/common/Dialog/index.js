import React,{useState} from 'react'
import panda from '@/assets/img/panda.png'
import { Modal,Icon } from 'antd';
import "./index.css"

export default () => {
  const [visible,setVisible] = useState(false) 
  return (
    <div  className="about"  >

        <div onClick={()=>setVisible(true)}>
            <img src={panda} alt=""/>
        </div >
        <Modal
           className="myModal" 
          title="项目介绍"
          visible={visible}
          onOk={()=>setVisible(false)}
          onCancel={()=>setVisible(false)}
          okText="确认"
          cancelText="取消"
        >

            <p><span>开发者：</span><a   rel="opener" href="https://github.com/mySouler"  >mySouler</a></p>
            <p className="icons-list"><span>源码：</span><a  rel="nofollow me noopener noreferrer" target="_blank"   href="https://github.com/mySouler/react-cnodejs">react-cnodejs</a>
                
                欢迎Star~ <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" /></p>
            <p><span>技术栈：</span></p>
            <ul>
                <li>React (hook)</li>
                <li>React Router</li>
                <li>Ant Design</li>
                <li>Axios</li>
            </ul>
          
        </Modal>
    </div>
  )
}
