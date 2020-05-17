import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "./styles.less"

export default @Form.create({
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
        console.log('Received values of form: ', values);
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
