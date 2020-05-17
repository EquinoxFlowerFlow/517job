import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    const { username } = this.props
    return (
      <div>
        {username}
      </div>
    )
  }
}
