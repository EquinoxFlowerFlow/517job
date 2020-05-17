import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { post } from '@/utils/request'
import api from '@/services/api'
import { connect } from 'react-redux'
import { loginUsername } from '@/action/loginAction'
import "./styles.less"

export default @connect(state => {
  return {
    username: state.loginReducers.username
  }
},{
  loginUsername,
})

@Form.create({
  // 表单回填使用
  mapPropsToFields ({ username, password }) {
    return {
      
    }
  },
})

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        post(api.login,values).then(res => {
          if (res.status == 200) {
            this.props.loginUsername(values)
            this.props.history.push('/home')
          }else{
            alert(res.message)
          }
        })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="Login">
        <div className="Login_B_D">
          <p>SIGN IN</p>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入账号' }],
              })(
                <Input
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }],
              })(
                <Input
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <p>Not registered?Sign Up</p>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
