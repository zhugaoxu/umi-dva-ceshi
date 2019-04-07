// 这个页面进行的是发送路由请求
import axios from 'axios'
let api='http://192.168.1.2:8087/tkmanage';
export async function login(values){
  return axios.post(`${api}/Account/login`,values)
}
