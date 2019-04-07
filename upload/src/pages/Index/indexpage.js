import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import { connect } from 'dva';
import { Menu, Icon, Button } from 'antd';

import router from 'umi/router';

const SubMenu = Menu.SubMenu;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }
    UNSAFE_componentWillMount(){
      console.log(this.props);
      console.log(JSON.parse(window.sessionStorage.getItem('user')));
      this.setState({
        xinxis:JSON.parse(window.sessionStorage.getItem('user')).major
      })
      console.log(this.props.sss.index.asides)
    }
    zhu(value){
       console.log(value)
    }

    goback(){
      window.sessionStorage.removeItem('index');
      // router.push('Login/login')
      window.location.href='/'

    }

    render() {
        return (
            <div >

<Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
          style={{width:256,height:'100vh',float:'left'}}
        >

         {
           this.props.sss.index.asides.map((item,index)=>{
            return(
              <Menu.Item key={index}>
                <Icon type="pie-chart" />
                <span>{item.name}</span>
             </Menu.Item>
            )
           })
         }
             <Menu.Item key={100}>
                <Icon type="pie-chart" />
                <span><Link to='/Index/indexpage/haha'> 跳转</Link> </span>
             </Menu.Item>

             <Menu.Item key={1000}>
                <Icon type="pie-chart" />
                <span><button onClick={this.goback.bind(this)}> 退出</button> </span>
             </Menu.Item>

             <SubMenu key="sub3" title={<span><span>题库管理</span></span>}>
                        {
                            this.state.xinxis.map((item, index) => {
                                return (
                                    <SubMenu style={{color:'white'}}  key={`${item.id}lll`} title={<span  onClick={this.zhu.bind(this,`${item.id}lll`)}><Icon type="mail" /><span >{item.major_name}</span></span>}>
                                        {

                                            (item.majors)?(item.majors.map((items, index) => {
                                                return (
                                                    <Menu.Item key={items.id}>{items.major_name}</Menu.Item>
                                                    // <p>{items.major_name}</p>
                                                )
                                            })):('')
                                        }
                                    </SubMenu>
                                )
                            })
                        }
                    </SubMenu>






        </Menu>

        <div style={{width:1100,height:600,border:'1px solid red',float:'right'}}>
           {this.props.children}
        </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => ({
  sss:state
})

export default connect(mapStateToProps)(Login);
