import axios from 'axios';

// axios.defaults.timeout = 10000;

axios.defaults.withCredentials = true;




axios.interceptors.request.use(config => {
    //发送请求操作，统一再请求里加上userId


    // config.data['Content_type']= 'application/x-www-form-urlencoded';
   // config.headers['Authorization'] = 'fsdfdsfdsfdsfd';
   if(JSON.parse(window.sessionStorage.getItem('user')).token){
    config.data=`${config.data}&access_token=${JSON.parse(window.sessionStorage.getItem('user')).token}`

   }


   // config.headers['user-id'] = JSON.parse(window.sessionStorage.getItem('user')).token;

    console.log(config.headers);
    return config;
}, error => {
    //发送请求错误操作
    console.log('请求失败')
    return Promise.reject(error);
})

axios.interceptors.response.use(response => {
    //对响应数据做操作
    return response;
})

export default axios;


