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


class Reg extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  checkPsd(rule, value, callback) {
    let password2 = this.props.form.getFieldValue('password2');
    if (password2 && password2 !== value) {
      callback(new Error('两次密码输入不一致'));
    } else {
      callback();
    }
  }

  checkPsd2(rule, value, callback) {
    let password = this.props.form.getFieldValue('password');
    if (password && password !== value) {
      callback(new Error('两次密码输入不一致'));
    } else {
      callback();
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="Reg">
        <div className="Reg_B_D">
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
                rules: [
                    { required: true, message: '请输入密码' },
                    { validator: (rule, value, callback) => { this.checkPsd(rule, value, callback) } }
                  ],
              })(
                <Input
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('ConfirmPassword', {
                rules: [
                    { required: true, message: '请输入密码' },
                    { validator: (rule, value, callback) => { this.checkPsd2(rule, value, callback) } },
                  ],
              })(
                <Input
                  type="password"
                  placeholder="ConfirmPassword"
                />,
              )}
            </Form.Item>
            <p>Already registered?Sign In</p>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
