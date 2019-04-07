
// 全局model，存放全局的基本数据和方法

import * as api from '../../services/qingqiu';

export default {
  namespace: 'index',
  state: {
    asides:[
      {
         name:'首页',
      },
      {
        name:'详情'

      },
      {
        name:'服务'

      },
      {
        name:'特色'

      }
    ]

  },
  reducers: {

    'change'(state,ming,key2){
      return {...state,...ming,...key2}
    }

  },
  effects:{
    *login( {payload},{call,put} ){
      let c=yield call( api.login,payload );

      console.log(c);
      if(c.data.data.userinfo){
        window.sessionStorage.setItem('user',JSON.stringify(c.data.data.userinfo))

      }

      return c
    }

  }
};
