import React, { Component } from 'react'
import { SearchBar, Button, WhiteSpace, WingBlank, Carousel, Grid } from 'antd-mobile';

import './home.scss'
import { gethouselist,ip} from '../../../api/apis.js'
import {connect} from 'react-redux'

const data = [
  { icon: `${ip}/imgs/newHouse.png`, text: '买房' },
  { icon: `${ip}/imgs/icon_renting.png`, text: '租房' },
  { icon: `${ip}/imgs/icon_second.png`, text: '二手房' },
  { icon: `${ip}/imgs/icon_shops.png`, text: '商铺' },
  { icon: `${ip}/imgs/icon_office.png`, text: '写字楼' },
  { icon: `${ip}/imgs/icon_answers.png`, text: '问答' },
  { icon: `${ip}/imgs/icon_Residential.png`, text: '小区' },
  { icon: `${ip}/imgs/icon_Villa.png`, text: '别墅' },
]
const data2 = [
  { icon: `${ip}/imgs/icon_loan.png`, text: '我要贷款' },
  { icon: `${ip}/imgs/icon_Calculation.png`, text: '房贷计算' },
  { icon: `${ip}/imgs/icon_knowledge.png`, text: '知识' },
  { icon: `${ip}/imgs/icon_scan.png`, text: '扫一扫' },
]
class Home extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
    LikeList: [],
    locationCity: '定位中'
  }

  /* 走马灯懒加载 */
  componentDidMount() {
    let _this=this;
    /* 走马灯 */
    setTimeout(() => {
      this.setState({
        data: ['1', '2', '3','4','5','6'],
      });
    }, 100);
    /* 猜你喜欢 */
    gethouselist().then(res => {
      this.setState({
        LikeList: res.data
      })
    })
    /* 地图数据 */
    //获取用户所在城市信息
      //实例化城市查询类
      var citysearch = new window.AMap.CitySearch();
      //自动获取用户IP，返回当前城市
      citysearch.getLocalCity(function (status, result) {
        if (status === 'complete' && result.info === 'OK') {
          if (result && result.city && result.bounds) {
            var cityinfo = result.city; //当前城市
            
              _this.setState({
                locationCity:cityinfo
              })
          }
        } else {
          document.getElementById('info').innerHTML = result.info;
        }
      });
  }

  render() {
    return (
      <div>
        {/* 顶部搜索 */}
        <div className='topBox'>
          <label className='city' onClick={this.cityClick}>{this.state.locationCity}▼</label>
          <div className='search'>
            <div style={{
              backgroundImage: `url(${require('../../../assets/images/icon_search.png')})`,
              backgroundSize: 'cover',
              height: '22px',
              width: '22px',
              marginLeft: '10px',
            }}></div>
            <span style={{ textIndent: 8, color: '#aaa' }}> 挑好房</span>
          </div>
          <div onClick={this.mapClick} style={{ backgroundImage: `url(${require('../../../assets/images/icon_map.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }}></div>
        </div>
        {/* 走马灯 */}
        {/* autoplay */}
        <Carousel autoplay={true} infinite >
          {this.state.data.map(val => (
            <img
              src={`${ip}/imgs/${val}.jpg`}
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
          ))}
        </Carousel>
        {/* 选择 */}
        <Grid data={data} hasLine={false} />
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        <div className='buyHouse'>
          <div className='houseStrategy'>专业的买房攻略</div>
          <Grid data={data2} hasLine={false} />
        </div>
        {/* 猜你喜欢 */}
        <WhiteSpace size="lg" />
        <div className='yourLike'>
          <div className="sub-title">猜你喜欢</div>
          <div>
            {
              this.state.LikeList.map(obj => {
                return <div onClick={this.houseClick.bind(this,obj)} key={obj.name} className='likeList'>
                  <div className='List'>
                    <p className='imgBox'><img src={ip + obj.imgs} /></p>
                    <div className='nameBox'>
                      <h3>{obj.name}</h3>
                      <p>
                        <span>{obj.area}</span><span>{obj.range}</span><br />
                        <span>{obj.type}</span><span>{obj.point}平</span>
                      </p>
                    </div>
                  </div>
                  <div className='price'>{obj.price}/平</div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    )
  }

  // componentWillUnMount(){
  //   //回收资源，当组件销毁的时候，所有响应就全部不在执行

  //   //这段代码的意思是把组件的setState函数设置一个进去就return的函数
  //   this.setState=(state,callback)=>{
  //     return
  //   }
  // }

  houseClick(obj){
    this.props.dispatch({
      type:'add_house',
      obj
    })

  }

  cityClick=()=>{
    window.location.href='#/city'
  }
  mapClick=()=>{
    window.location.href='#/map'
  }
}
export default connect()(Home)