import React, { Component } from 'react'

import {List} from 'antd-mobile'
import './my.scss'
import {ip} from '../../../api/apis'

const Item = List.Item;
export default class My extends Component {
  state={
    header:'header',
    lists:[
      {id:1,icon:'icon_integral.png',text:'我的积分'},
      {id:2,icon:'icon_signal.png',text:'我的订阅'},
      {icon:''},
      {id:3,icon:'icon_twoPerson.png',text:'微信联系人'},
      {id:4,icon:'icon_Calculator.png',text:'房贷计算器'},
      {id:5,icon:'icon_house.png',text:'我的房子'},
      {icon:''},      
      {id:6,icon:'icon_clock.png',text:'我的看房记录'},
      {id:7,icon:'icon_answer.png',text:'我的问答'},
      {id:8,icon:'icon_setUp.png',text:'设置'},
    ]
  }
  render() {
    return (
      <div>
        {/* 顶部个人信息 */}
        <div className='personInfo'>
          <div className='Info-Box'>
              <div className='header'>
                <div className='headerImgBox' style={{width:60,height:60,backgroundColor:'#fff'}}><img style={{width:60}} src={ip+'/imgs/'+`${this.state.header}`+'.jpg'}/></div>
                <div className='loginReg'>
                  <p style={{fontSize:20,marginBottom:12}}>登录/注册</p>
                  <p>可以和经纪人聊天</p>
                </div>
              </div>
              <div>设置</div>
          </div>
          <div className='discount'>
              <div>
                <p>0</p>
                <div>钱包</div>
              </div>
              <div className='Dis'>
                <p>0</p>
                <p>优惠</p>
              </div>
              <div>
                <p>0</p>
                <p>优惠积分</p>
              </div>
          </div>
        </div>
        {/* 列表 */}
        <div  style={{marginTop:10}}>
          {
            this.state.lists.map((val)=>{
              if(val.icon!='') return <List key={val.id}>
              <Item
                  thumb={`${require('../../../assets/images/'+val.icon)}`}
                  arrow="horizontal"
                  onClick={() => {}}
                >{val.text}</Item>
              </List>
              else return <div style={{ backgroundColor: '#F4F4F4', height: 8 }}></div>
            })
          }
        </div>


      </div>
    )
  }
}
