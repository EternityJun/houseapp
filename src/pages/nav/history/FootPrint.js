import React, { Component } from 'react'

//2.引入connect数据注入函数
import {connect} from 'react-redux'

import {ip} from '../../../api/apis'
import './footPrint.scss'

class FootPrint extends Component {
  render() {
    return (
      <div>
        {
          this.props.state.map(obj=>{
            return <div key={obj.name} className='likeList'>
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
    )
  }
}


//3.把stroe内的数据注入到当前组件中
export default connect((state)=>{
  //数据注入函数
  //此函数必须return一个值，return的值才会被真正注入到当前组件中
  return {state}
})(FootPrint)
