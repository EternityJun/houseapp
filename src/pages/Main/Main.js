import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';

import { Link } from 'react-router-dom'

import Home from '../nav/main/Home.js'
import Char from '../nav/chat/Char.js'
import Footprint from '../nav/history/FootPrint.js'
import My from '../nav/my/My.js'

import './main.scss'
export default class Main extends Component {
  state = {
    selectedTab: 'main', //当前选中的默认

    /* 导航数据 */
    navList:[
      {title:'首页',navKey:'main',icon:'icon_house02.png',selectIcon:'icon_house2.png',child:<Home/>},
      {title:'微聊',navKey:'char',icon:'icon_char2.png',selectIcon:'icon_char.png',child:<Char/>},
      {title:'足迹',navKey:'footprint',icon:'icon_footprint2.png',selectIcon:'icon_footprint.png',child:<Footprint/>},
      {title:'我的',navKey:'my',icon:'icon_my2.png',selectIcon:'icon_my.png',child:<My/>},
    ]
  };
  renderContent() {
    switch(this.state.selectedTab){
          case 'main':
          return <Home/>
          case 'char':
          return <Char/>
          case 'footprint':
          return <Footprint/>
          case 'my':
          return <My/>
    };
  }

  render() {
    let {navList}=this.state
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494" //未选中字体的颜色
          tintColor="#D32932" //选中文字的颜色
          barTintColor="white" //底栏背景色
        >
          {
            navList.map((val)=>
              <TabBar.Item
                title={val.title}
                key={val.navKey}
                icon={<div style={{
                  width: '22px', height: '22px',
                  background: `url(${require('../../assets/images/'+ val.icon )}) center center /  21px 21px no-repeat`
                }}
                />}
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${require('../../assets/images/'+val.selectIcon)}) center center /  21px 21px no-repeat`
                }}
                />}
                selected={this.state.selectedTab === val.navKey}
                onPress={() => {
                  this.setState({
                    selectedTab: val.navKey,
                  });
                }}
              >
                {val.child}
              </TabBar.Item>
            )
          }
        </TabBar>
      </div>
    )
  }
}
