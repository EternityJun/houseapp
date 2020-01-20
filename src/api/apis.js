import axios from 'axios'
import qs from 'qs'


// export const ip = 'http://127.0.0.1:80'
export const ip = 'http://192.168.43.176:80'

const req=axios.create({
  baseURL:ip,
  timeout:3000
})



/* export default全局暴露一次，如果出现多次export default,后面暴露的会覆盖前面的
   export 可以暴露多次 */

/* PHP后台必须把post 参数使用qs转换一次才可以接到 */
/* 登录接口函数：参数acc:用户 pwd：密码 */

/* axios是基于promise对象封装，所以接响应才是.then() */


/* 防抖节流 （性能优化）*/
/* 防止用户短期内连续多次点击，发送相同请求，造成服务器资源浪费 */

/* 登录 */
export function login(acc,pwd){
  return req.post('./login.php',qs.stringify({acc,pwd}))
}
/* 注册 */
export function reg(acc,pwd){
  return req.post('./reg.php',qs.stringify({acc,pwd}))
}

/* 验证码 */
export function valitecode(){
  return req.get('./valitecode.php')
}
/* 猜你喜欢 */
export function gethouselist(){
  return req.get('./gethouselist.php')
}

