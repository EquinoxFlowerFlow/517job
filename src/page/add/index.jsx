import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { post } from '@/utils/request'
import api from '@/services/api'
import './styles.less'

export default @Form.create({
  // 表单回填使用
  mapPropsToFields ({ username, password }) {
    return {
      
    }
  },
})

class Add extends Component {
  handleReset = () => {
    this.props.form.resetFields();
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        post(api.add, values).then(res => {
          if (res.status == 200) {
            alert(res.info)
            this.props.history.push('/home/echart')
          }
        })
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="Add">
        <Form onSubmit={this.handleSubmit} >
          <p>Basic Form</p>
          <p>Basic form elements</p>
          <Form.Item label="Name" >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入用户名' }],
            })(
              <Input placeholder="Name" />
            )}
          </Form.Item>
          <Form.Item label="Age">
          {getFieldDecorator('age', {
              rules: [{ required: true, message: '请输入年龄' }],
            })(
              <Input placeholder="Age" />
            )}
          </Form.Item>
          <Form.Item label="Msg">
            {getFieldDecorator('msg', {
              rules: [{ required: true, message: '请输入价格' }],
            })(
              <Input placeholder="Msg" />
            )}
          </Form.Item>
          <Form.Item label="Hospital">
            {getFieldDecorator('hospital', {
              rules: [{ required: true, message: '请输入信息' }],
            })(
              <Input placeholder="Hospital" />
            )}
          </Form.Item>
          <Form.Item label="Gender">
            {getFieldDecorator('gender', {
              rules: [{ required: true, message: '请输入标题' }],
            })(
              <Input placeholder="Gender" />
            )}
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit" >Submit</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Clear
            </Button>          
          </Form.Item>
        </Form>
      </div>
    )
  }
}
