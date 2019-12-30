import React, {useEffect, useRef} from 'react'
import {useParams} from 'react-router-dom'
import { DatePicker } from 'antd';
import moment from 'moment';
import '../style.scss'

// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入折线图
require("echarts/lib/chart/line");
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');

interface dateAll {
  dateArr: Array<any>,
  waitArr: Array<any>,
  accceptedArr: Array<any>,
  hastop : Boolean,
  isdate2 : Boolean,
  title: String,
  dateArr2: Array<any>,
  utilizationArr: Array<any>
}
const Line:React.FC<dateAll> = function Line(props) {
  
  let line1  = useRef<HTMLDivElement | null>(null);
// 折线图1
useEffect(() => {
  var myChart2 = echarts.init(line1.current);
  var option2 = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
      left: 'center',
      top: '10px',
      data: ['enter', 'out', props.isdate2 && 'utilization']
    },
    xAxis: {
      type: 'category',
      name: 'x',
      splitLine: {show: false},
      data: props.isdate2 ? props.dateArr2 : props.dateArr
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    yAxis: {
      type: 'value',
      name: 'y'
    },
    series: [
      props.hastop && {
        name: 'enter',
        type: 'line',
        data: props.waitArr
      },
      props.hastop && {
        name: 'out',
        type: 'line',
        data: props.accceptedArr
      },
      props.isdate2 && {
        name: 'utilization',
        type: 'line',
        data: props.utilizationArr
      }
    ]
  };
  // 绘制图表
  myChart2.setOption(option2);
}, [])

return (
  <div className="line-con" style={{height: '200px'}}>
<div className="line-left">{props.title}</div>
    <div className="line-right">
      {props.hastop && <div className="line-right-top">时间</div>}
      <div className="line-content" ref={line1}></div>
    </div>
  </div>
)
}


export default Line;