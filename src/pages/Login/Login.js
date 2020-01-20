import React, { Component } from 'react'

import {Flex, Button,InputItem,WingBlank,WhiteSpace,Toast } from 'antd-mobile'
import {Link} from 'react-router-dom'

import {login} from '../../api/apis.js'
import './login.scss'
export default class Login extends Component {
  state={
    user:'',
    pwd:'',
    olduser:'',
    oldpwd:''
  }

  render() {
    return (
      <div className='backC'>
          <Flex justify="center">
            <div className='logo-box'>
              <img style={{width:200}} src={require('../../assets/images/logo.png')}/>
            </div>
          </Flex>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <InputItem clear placeholder="请输入账号" type="text" value={this.state.user} onChange={val=>this.setState({user:val})}>
            <div style={{ backgroundImage: `url(${require('../../assets/images/icon_user.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }}></div>
          </InputItem>
            <InputItem clear type="password" placeholder="请输入密码" value={this.state.pwd} onChange={val=>this.setState({pwd:val})}>
            <div style={{ backgroundImage: `url(${require('../../assets/images/icon_pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }}></div>
          </InputItem>
          <WhiteSpace size="lg" />
          <Button onClick={this.loginBtn} activeStyle={{backgroundColor:'rgb(182, 25, 33)'}} style={{backgroundColor:'#CE0F19',color:'#fff'}}>登录</Button>
          <WhiteSpace size="md" />
          {/* 快速注册  忘记密码 */}
          <Flex justify="between">
            <Link to="/reg"><span style={{color:'#CE0F19',fontSize:12}}>手机快速注册</span></Link>
            <Link to="/forgetPwd"><span style={{color:'#CE0F19',fontSize:12}}>忘记密码？</span></Link>
          </Flex>
        </WingBlank>
      </div>
    )
  }
  /* 登录 */
  loginBtn=async()=>{
    let {user,pwd}=this.state.user;

    if(this.state.olduser==this.state.user)return;

    this.setState({
      olduser:user,
      oldpwd:pwd
    })
      let res= await login(user,pwd)
      if(res.data=='ok'){
        window.location.href='#/'
      }else{
        Toast.fail('登录失败', 2);
      }
  }
}
