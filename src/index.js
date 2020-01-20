import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import './components/component.scss'
import 'antd-mobile/dist/antd-mobile.css'
import store from './store/'
import {Provider} from 'react-redux'

//Provider redux的数据容器，只要给provide绑定一个store,provider内的所有子元素全局共享此store

//Provider redux的数据容器，只要给provide绑定一个store
{/* <Provider store={store}>
//Provider内的所有儿子，不管层级有多深，都能全局共享此store所有数据
<App/>
</Provider> */}


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

