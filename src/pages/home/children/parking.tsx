import React, {useState,useEffect, useRef} from 'react'
import {useParams} from 'react-router-dom'
import { DatePicker } from 'antd';
import moment from 'moment';
import './style.scss'
import Line from './components/line'
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');

const dateArr= ['00:00','02:00','04:00','06:00','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'];
const dateArr2 = ['8-1','8-2','8-3','8-4','8-5','8-6','8-7','8-8','8-9','8-10'];
const dateFormat = 'YYYY/MM/DD';
const carArr = [
  {icon: '/static/sry-car.jpg', title: '当前车流量', num: '1888', aTag: ''},
  {icon: '/static/sry-money.jpg', title: '已收费用', num: '1888', aTag: ''},
  {icon: '/static/sry-hand.jpg', title: '代收费用', num: '1888', aTag: ''},
  {icon: '/static/sry-parking.jpg', title: '已用车位', num: '50/100', aTag: ''},
  {icon: '/static/sry-free.jpg', title: '空车位', num: '50', aTag: '详情'},
];

const countChartsArr = [
  {name: '当前收入', count: '¥2345'},
  {name: '进厂车流', count: '567辆'},
  {name: '出厂车流', count:  '564辆'},
  {name: '平均停车时长', count:  '1小时32分'},
];
const Parking:React.FC<{}> = function Parking(props) {
  let main  = useRef<HTMLDivElement | null>(null);
  const [title, setTitle] = useState('中原福塔停车场')

  const params = useParams();
  console.log(params);
  const value = Object.values(params);
  console.log(value[0]);
  let utilizationArr: any[]=[],waitArr: any[]=[],accceptedArr: any[]=[];
  
  switch (value[0]) {
    case '1':
      utilizationArr = ['56','76','87','58','67','87','90','76','65','54'];
// wait数组值
      waitArr= [250, 432, 501, 334, 590, 654, 1220, 1020, 832, 701, 534, 690, 870];
// accepted数组值
      accceptedArr= [10, 22, 21, 54, 90, 160, 210, 532, 432, 301, 234, 120, 230];
      break;

    case '2':
      utilizationArr = ['0','0','45','67','24','65','76','23','54','90'];
// wait数组值
      waitArr= [234, 212, 677, 899, 687, 234, 543, 566, 243, 1290, 432, 78, 65];
// accepted数组值
      accceptedArr= [465, 423, 221, 45, 67, 56, 346, 343, 432, 301, 787, 345, 785];
      // setTitle('国际陆港停车场')
      break;
  }
      
  // 圆柱图
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(main.current);
    var option1 = {
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        left: 'center',
        'top': '10px',
        data: ['accepted','wait']
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : dateArr
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'accepted',
          type:'bar',
          data: accceptedArr,
          itemStyle: {
            normal: {
              color: 'rgb(93,161,248)'
            }
          }
        },
        {
          name:'wait',
          type:'bar',
          stack: '广告',
          data: waitArr,
          itemStyle: {
            normal: {
              color: 'rgb(120,200,125)'
            }
          }
        }
      ]
    };
    // 绘制图表
    myChart1.setOption(option1);
  }, [])
  
  // ul列表
  const carDOM = carArr.map((item, index)=> {
    return (
      <li key={index} className="home-li-item">
        <img src={item.icon} alt={item.title} className="home-img"/>
        <div className="home-li-right">
          <div className="home-li-title">{item.title}</div>
          <div className="home-li-bottom">
            <h5 className="home-li-num">{item.num}</h5>
            <a href="#" className="home-li-a">{item.aTag}</a>
          </div>
        </div>
      </li>
    )
  })
  // 收入统计结果
  const countDOM = countChartsArr.map((item,index) => {
    return (
      <li className="count-item" key={index}>
        <p className="left-count">{item.name}</p>
        <p className="right-count">{item.count}</p>
      </li>
    )
  })

  return (
    <div className="home-wrap">
      {/* 头部 */}
      <div className="home-top">
        <div className="home-top-right">2019年</div>
        <div className="home-top-right">当前停车场：{title}</div>
      </div>
      {/* ul列表 */}
      <ul className="home-ul1-wrap">
        {carDOM}
      </ul>
      {/* echarts柱形图*/}
      <div className="bar-charts-wrap">
        <div className="charts-top">
          <h4 className="charts-top-left">收入统计图</h4>
          <div className="charts-top-right">
            <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
          </div>
        </div>
        {/* 圆柱 */}
        <div className="charts">
          <div className="main-charts" style={{width: '83%', height: '300px'}} ref={main}></div>
          <ul className="count-charts">
            {countDOM}
          </ul>
        </div>
      </div>
     
      {/* ecahrts折线图1 */}
      <div className="line-wrap">
        {/* line1 */}
        <Line 
        dateArr={dateArr}
        accceptedArr={accceptedArr}
        waitArr={waitArr}
        hastop={true}
        title='进出场流量图'
        isdate2={false}
        dateArr2={[]}
        utilizationArr={[]}
        ></Line>

        {/* line2 */}
        <Line dateArr={dateArr}
        accceptedArr={accceptedArr}
        waitArr={waitArr} 
        hastop={false}
        title='车位利用率'
        isdate2={true}
        dateArr2={dateArr2}
        utilizationArr={utilizationArr}
        ></Line>
      </div>


    </div>
    
  )
  
}

export default Parking;