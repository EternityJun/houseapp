import React, { Component } from 'react'

import BScroll from 'better-scroll'

import './city.scss'
import cityArr from '../../json/citylist.json'
import { hidden } from 'ansi-colors';
export default class City extends Component {
  render() {
    return (
      <div style={{height:'100%'}}>
          <div id='cityList' style={{height:'800px',overflow:hidden}}>
            <ul className='content'>
              {
                cityArr.map(obj=><div key={obj.letter} id={obj.letter}>
                  <h3>{obj.letter}</h3>
                    {
                      obj.list.map(list=>
                      <div className='cityList'>{list}</div>
                      )
                    }
                  </div>)
                }
            </ul>

          </div>
        
        {/* 右边字母联动 */}
        <div className='rightLetter' onTouchMove={this.moveTitle.bind(this)}>
        {
          cityArr.map(obj=><p className='right_letter' onClick={this.letterClick.bind(this,obj.letter)}>{obj.letter}</p>)
        }
          
        </div>
      </div>
    )
  }


/*  */
// moveTitle(e){
// //获取第一根手指的触屏事件对象
// //e.touches[0].clientX,e.touches[0].clientY 获取当前手指的触摸信息数据
// // let elt=document.elementFromPoint(e.touches[0],clientX,e.touches[0],clientY)
// // elt.className 可以根据当前的x和Y坐标，获取此坐标对应的DOM元素
// // if(elt.className=='')
// }

letterClick(val){

  this.leftBox.scrollToElement('#'+val,600)
}

moveTitle(e){
  // console.log(e.touches[0].clientX,e.touches[0].clientY)
  let elt = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY)
  if(elt.className=='right_letter'){
    this.leftBox.scrollToElement('#'+elt.innerHTML,600)
  }


}
componentDidMount(){
  this.leftBox=new BScroll('#cityList') 
}
}
