import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '@@@/Header'

export default @connect(state => {
  return {
    username: state.loginReducers.username
  }
},{

})

class Home extends Component {
  componentDidMount () {
    if (!this.props.username) {
      this.props.history.push('/login')
    }
  }
  render() {
    const { username } = this.props
    return (
      <div>
        <Header username={username} />
      </div>
    )
  }
}
