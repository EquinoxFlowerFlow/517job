import React, { Component } from 'react'
import Echartt from '@@@/Echart'
import './styles.less'

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

var optionThree = {
  xAxis: {
      type: 'category',
      boundaryGap: false
  },
  yAxis: {
      type: 'value',
      boundaryGap: [0, '30%']
  },
  visualMap: {
      type: 'piecewise',
      show: false,
      dimension: 0,
      seriesIndex: 0,
      pieces: [{
          gt: 1,
          lt: 3,
          color: 'rgba(0, 180, 0, 0.5)'
      }, {
          gt: 5,
          lt: 7,
          color: 'rgba(0, 180, 0, 0.5)'
      }]
  },
  series: [
      {
          type: 'line',
          smooth: 0.6,
          symbol: 'none',
          lineStyle: {
              color: 'green',
              width: 5
          },
          markLine: {
              symbol: ['none', 'none'],
              label: {show: false},
              data: [
                  {xAxis: 1},
                  {xAxis: 3},
                  {xAxis: 5},
                  {xAxis: 7}
              ]
          },
          areaStyle: {},
          data: [
              ['2019-10-10', 200],
              ['2019-10-11', 400],
              ['2019-10-12', 650],
              ['2019-10-13', 500],
              ['2019-10-14', 250],
              ['2019-10-15', 300],
              ['2019-10-16', 450],
              ['2019-10-17', 300],
              ['2019-10-18', 100]
          ]
      }
  ]
};

var optionFour = {
  xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
  }]
};

var arr = [optionThree, optionTwo, optionFour, option]
export default class Echart extends Component {
  render() {
    return (
      <div className="Echart">
        {
          arr.map((item, index) => {
            return <Echartt key={index} option={item} />
          })  
        }
      </div>
    )
  }
}
