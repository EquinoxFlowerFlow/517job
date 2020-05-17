import React, { Component } from 'react'
import echarts from 'echarts'
import { withRouter } from 'react-router-dom'
import './styles.less'

export default @withRouter
class Echart extends Component {
  componentDidMount () {
    const { option } = this.props 
    var myChart = echarts.init(this.el);
    // 指定图表的配置项和数据

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
  render() {
    return (
      <div className="content" ref={v => this.el = v}>
        
      </div>
    )
  }
}
