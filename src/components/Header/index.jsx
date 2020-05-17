import React, { Component } from 'react'
import './styles.less'

export default class Header extends Component {
  render() {
    const { username } = this.props
    return (
      <ul className="Header">
        <li>Purple</li>
        <li>
          <input type="text"/>
          <span>搜索</span>
        </li>
        <li>邮箱</li>
        <li>消息提示</li>
        <li>用户名{username}</li>
        <li>退出</li>
      </ul>
    )
  }
}
