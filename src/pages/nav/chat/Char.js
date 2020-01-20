import React, { Component } from 'react'
import {Button} from 'antd-mobile'
import './char.scss'

export default class Char extends Component {
  render() {
    return (
      <div className="charBigBox">
        <div className="charBox">
          <div className="headerBox" style={{width:70,height:70}}>
            <img style={{width:70}} src='http://img3.imgtn.bdimg.com/it/u=2805057135,3110226238&fm=11&gp=0.jpg' />
          </div>
          <p>置业顾问：<span style={{color:'red'}}> 张小妹</span></p>
          <p>专业服务诚信做人诚信做事！</p>
          <Button className='charBtn' type="warning">我要聊天</Button>
        </div>
      </div>
    )
  }
}
