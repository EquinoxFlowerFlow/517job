import React, { Component } from 'react'
import echarts from 'echarts'
import './styles.less'

export default class Echart extends Component {
  componentDidMount () {
    var myChart = echarts.init(this.el);
    // 指定图表的配置项和数据
    var option = {
      title: {
          text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
          data:['销量']
      },
      xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      };

    var optionTwo = {
      tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
          orient: 'vertical',
          left: 10,
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
          {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  label: {
                      show: true,
                      fontSize: '30',
                      fontWeight: 'bold'
                  }
              },
              labelLine: {
                  show: false
              },
              data: [
                  {value: 335, name: '直接访问'},
                  {value: 310, name: '邮件营销'},
                  {value: 234, name: '联盟广告'},
                  {value: 135, name: '视频广告'},
                  {value: 1548, name: '搜索引擎'}
              ]
          }
      ]
      };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option,optionTwo);
  }
  render() {
    return (
      <div className="Echart">
        <div className="content" ref={v => this.el = v}>

        </div>
        <div className="content_Two" ref={v => this.el = v}>

        </div>
      </div>
    )
  }
}
