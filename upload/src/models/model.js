
// 全局model，存放全局的基本数据和方法

export default {
  namespace: 'fen',
  state: [

  ],
  reducers: {

    'change'(state,ming,key2){
      return {...state,...ming,...key2}
    }

  },
  effects:{

  }
};
