import React, { Component } from 'react';

import { connect } from 'dva';
import router from 'umi/router';
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import qs from 'qs';
import styles from './login.css';
const FormItem = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }

    // tiao(){
    //   window.sessionStorage.setItem('index',1)
    //   router.push('/Index/indexpage')
    // }

    handleSubmit = (e) => {
      e.preventDefault();
      let jiekou='http://192.168.1.2:8087';
      let sui={'id':'ssss'};
      let users=JSON.stringify(sui);
      window.sessionStorage.setItem('user',users);



      this.props.form.validateFields((err, values) => {
        if (!err) {
          values=qs.stringify(values);
          console.log(values)
          this.props.dispatch({
            type:'login/login',
            payload:values
          }).then( (val)=>{
           if(val.data.data.userinfo){
            window.sessionStorage.setItem('index',1)
            // router.push('Index/indexpage')
            window.location.href='Index/indexpage'
           }
          } )

        }
      })
    }

    render() {
      const { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.form}>

        <Form onSubmit={this.handleSubmit}>
            <FormItem>

              {getFieldDecorator('ac_login', {
                rules: [
                  { required: true, message: '请输入用户名!',trigger: 'blur' },
                  { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'focus' },
                ],

              })(
                <Input maxLength='15' prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入您的用户名" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('ac_pass', {
                rules: [
                  { required: true, message: '请输入您的密码!',trigger: 'blur' },
                  {  min: 6, max: 12, message: '长度在6~12位之间', trigger: 'focus'}
                ],
              })(
                <Input maxLength='12' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入您的密码" />
              )}
            </FormItem>
            <FormItem>


              <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}} >
                登录
              </Button>
            </FormItem>
          </Form>
            </div>
        )
    }

}
const mapStateToProps = (state) => ({
  sss:state
})

const Denglu = Form.create()(Login);

export default connect(mapStateToProps)(Denglu);
