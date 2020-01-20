import React, { Component } from 'react'

import { HashRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login/Login'
import Reg from './pages/Reg/Reg'
import Forgetpwd from './pages/forgetPwd/ForgetPwd.js'
import City from './pages/city/City.js'
import Map from './pages/map/Map.js'

import Main from './pages/Main/Main'


import './components/component.scss'

/* 配置路由 */
/* 大项目开发思路，绝不是一次性就能配好，先把一级路由切换配置完毕，
搞清大页面的跳转关系
二级或更小的路由，写道具体页面，再去具体配置，这样能极大提高效率 */
export default class App extends Component {
  render() {
    return (
      <div>
      {
        <HashRouter>
          <Switch>
            {/* exact： 精准匹配，只匹配path完全相等字符串 */}
              <Route path='/Main' component={Main} />
              <Route path='/login' component={Login} />
              <Route path='/reg' component={Reg} />
              <Route path='/Forgetpwd' component={Forgetpwd} />
              <Route path='/City' component={City} />
              <Route path='/Map' component={Map} />
              {/* default路线，如果前面路线都不匹配成功，则返回默认路线 */}
              <Route component={Main} />
          </Switch>
        </HashRouter>
      }
    </div>
    )
  }
}
