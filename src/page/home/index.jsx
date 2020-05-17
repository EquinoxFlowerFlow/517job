import React, { Component } from 'react'
import { connect } from 'react-redux'
import Heade from '@@@/Header'
import { Layout ,Menu, Icon } from 'antd';
import { Switch, Route, NavLink } from 'react-router-dom'

import Add from '@@/add'
import Echart from '@@/echart'
import Pagping from '@@/pagping'
import Tablee from '@@/table'

import './styles.less'

const { Header, Footer, Sider, Content } = Layout;


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
      <div className="Home">
        <Layout>
          <Heade username={username} />
         <Layout>
           <Sider>
            <div>
              <Menu
                defaultSelectedKeys={['4']}
                defaultOpenKeys={['sub1']}
                mode="inline"
              >
                <Menu.Item key="1">
                  <Icon type="pie-chart" />
                  <span>Dashboard ( 2 new updates)</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="desktop" />
                  <span>Basic UI Elements</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="inbox" />
                  <span>Icons</span>
                </Menu.Item>
                <Menu.Item key="4">
                  <NavLink to="/home/add">
                    <Icon type="inbox" />
                    <span>Form Elements</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="5">
                  <NavLink to="/home/echart">
                    <Icon type="inbox" />
                    <span>Chart</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="6">
                  <NavLink to="/home/table">
                    <Icon type="inbox" />
                    <span>Table</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="7">
                  <NavLink to="/home/pagping">
                    <Icon type="inbox" />
                    <span>Sample Pages</span>
                  </NavLink>
                </Menu.Item>
                
              </Menu>
            </div>
           </Sider>
           <Content>
             <Switch>
                <Route path="/home/add" component={Add} />
                <Route path="/home/echart" component={Echart} />
                <Route path="/home/pagping" component={Pagping} />
                <Route path="/home/table" component={Tablee} />
             </Switch>
           </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
