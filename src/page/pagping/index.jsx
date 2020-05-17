import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Pagination } from 'antd';
import { pagpingData } from '@/action/pagpingAction'
import './styles.less'

export default @connect(state => {
  return {
    pagping: state.pagping.data,
    count: state.pagping.count
  }
},{
  pagpingData
})

class Pagping extends Component {
  componentDidMount () {
    this.props.pagpingData({page:1})
  }
  onChange = (page, pageSize) => {
    this.props.pagpingData({page})
  }
  render() {
    const { pagping, count } = this.props
    return (
      <div className='Pagping'>
        <div>
          {
            pagping.map(item => {
              return <div key={item.id}>
                  <dl>
                    <dt>{item.title}</dt>
                    <dd>{item.tags}</dd>
                </dl>
              </div>
            })
          }
        </div>
        <Pagination 
          onChange={this.onChange} 
          total={Number(count)} 
          defaultCurrent={Number(1)}
        />
      </div>
    )
  }
}
