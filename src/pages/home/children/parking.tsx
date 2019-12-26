import React, {useEffect, useRef} from 'react'
import {useParams} from 'react-router-dom'
import { DatePicker } from 'antd';
import moment from 'moment';
import './style.scss'
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');


const dateFormat = 'YYYY/MM/DD';



const carArr = [
  {icon: 'http://www.axshare.cn/gsc/HD8PGB/12/1f/a9/121fa9aa9baa41719432c354b461f038/images/%E9%A6%96%E9%A1%B5%E5%86%85%E5%AE%B9/u53.svg?token=87cc989a6c5d4e3900ccf61ac73562652ece274a4507c8d22a74a804479e26dc', title: '当前车流量', num: '1888', aTag: ''},
  {icon: 'http://www.axshare.cn/gsc/HD8PGB/12/1f/a9/121fa9aa9baa41719432c354b461f038/images/%E9%A6%96%E9%A1%B5%E5%86%85%E5%AE%B9/u60.svg?token=affbc26c86133710b4de46f849e73bf254e014e8263c3b898d639fcafbcb364d', title: '已收费用', num: '1888', aTag: ''},
  {icon: 'http://www.axshare.cn/gsc/HD8PGB/12/1f/a9/121fa9aa9baa41719432c354b461f038/images/%E9%A6%96%E9%A1%B5%E5%86%85%E5%AE%B9/u65.svg?token=4197061f2792ad9ff1ef3bee7f49b140583cc447932372e33f318e89bf7e7cd3', title: '代收费用', num: '1888', aTag: ''},
  {icon: 'http://www.axshare.cn/gsc/HD8PGB/12/1f/a9/121fa9aa9baa41719432c354b461f038/images/%E9%A6%96%E9%A1%B5%E5%86%85%E5%AE%B9/u70.svg?token=2620dfed09c034105a1caa909a8c4fd94e62132e03a8ac611c056f24f4758b0d', title: '已用车位', num: '50/100', aTag: ''},
  {icon: 'http://www.axshare.cn/gsc/HD8PGB/12/1f/a9/121fa9aa9baa41719432c354b461f038/images/%E9%A6%96%E9%A1%B5%E5%86%85%E5%AE%B9/u75.svg?token=30fff696b791755c0524c7f48ffc758fca12330eef3b7d8f9d65b1602f97e640', title: '空车位', num: '50', aTag: '详情'},
];

const Parking:React.FC<{}> = function Parking(props) {
  let main  = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(main.current);
    
    // 绘制图表
    myChart.setOption({
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
  }, [])

  const carDOM = carArr.map((item, index)=> {
    return (
        <li key={index} className="home-li-item">
          <img src={item.icon} alt="" className="home-img"/>
          <div className="home-li-right">
            <div className="home-li-title">{item.title}</div>
            <div className="home-li-bottom">
              <h5 className="home-li-num">{item.num}</h5>
              <a href="" className="home-li-a">{item.aTag}</a>
            </div>
          </div>
        </li>
    )
  })
  const params = useParams();
  console.log(params);
  let value = Object.values(params);
  return (
    <div className="home-wrap">
      {/* 头部 */}
      <div className="home-top">
        {/* <div>{value}页面</div> */}
        <div className="home-top-right">2019年</div>
        <div className="home-top-right">当前停车场：</div>
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

        <div className="main" style={{width: '100%', height: '300px'}} ref={main}></div>



      </div>
    </div>
  )
  
}

export default Parking;