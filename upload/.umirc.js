
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'umi从头搭建',
      dll: false,


    }],
  ],
  routes:[

    {
      path:'Index/IndexPage',
      component:'Index/IndexPage',
      routes:[
        {
          path:'haha',
          component:'haha/index',

        }
      ]
    },
    {
      path:'/',
      component:'Login/login',

    },

  ]
}
