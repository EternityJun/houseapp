import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {WingBlank,List,InputItem,
        WhiteSpace,Button,Flex,Radio,Toast
        } from 'antd-mobile'

import {reg,valitecode} from '../../api/apis.js'
import './reg.scss'
import { redBright } from 'ansi-colors';
export default class Reg extends Component {
    state={
      acc:'',
      pwd:'',
      oldacc:'',
      oldpwd:'',
      checked:false
    }
  render() {
    let {acc,pwd,checked}=this.state;
    return (
      <div className={'padTB30'}>
         <WingBlank size="lg">
          <h2 className={'title'}>注册</h2>
          <p  className={'subTitle'}>经济人不会看到您的手机号</p>
          <List>
            <InputItem clear placeholder="请输入手机号" value={acc} onChange={val=>this.setState({acc:val})}></InputItem>
            <InputItem type="password" clear placeholder="请输入密码"  value={pwd} onChange={val=>this.setState({pwd:val})}></InputItem>
            <Flex justify="right">
              <InputItem clear placeholder="请输入验证码"></InputItem><span onClick={this.valiteClick}>获取验证码</span>
            </Flex>
          </List>
          <WhiteSpace size="lg"/>
          <div onClick={()=>this.setState({checked:!this.state.checked})}>
          <Radio className="my-radio" checked={checked}>我已同意<span style={{color:'#CE0F19'}}>《用户服务协议》及《隐私权政策》</span></Radio></div>
          <WhiteSpace size="lg"/>
          <Button onClick={this.regClick.bind(this)} activeStyle={{backgroundColor:'rgb(182, 25, 33)'}} style={{backgroundColor:'#CE0F19',color:'#fff'}}>注册</Button>
          <WhiteSpace size="sm"/>
          <Link to="/login"><span style={{color:'#CE0F19',fontSize:12}}>已有账号</span></Link>
          </WingBlank>
      </div>
    )
  }
  /* 注册 */
  async regClick(){
    let {acc,pwd,checked}=this.state;

    if(this.state.oldacc==acc) return;

    this.setState({
      oldacc:acc,
      oldpwd:pwd
    })

    if(checked==true){
      let res=await reg(acc,pwd)
      if(res.data=='ok'){
        window.location.href='#/login'
      }else{
        Toast.fail('注册失败', 2);
      }
      return;
    }


  }
  /* 验证码 */
  async valiteClick(){
    valitecode().then(req=>console.log(req.data))
  }
}
