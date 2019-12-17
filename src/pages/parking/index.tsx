import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from "antd";
import Sider from '@layout/sider'
const { Content } = Layout;


const Parking: React.FC<{}> = function Parking(){

  const arrList = [
    {
      title: '停车场管理',
      path: '/parking/parkManage',
    },
    {
      title: '停车位管理',
      path: '/parking/spotManage',
    },
    {
      title: '计费规则管理',
      path: '/parking/billingManage',
    },
    {
      title: '车位卡管理',
      path: '/parking/cardManage',
    },
    {
      title: '设备管理',
      path: '/parking/equipmentManage',
    }
  ]
  return (
    <BrowserRouter>
      {/* <h1>停车场管理</h1>
      <Sider/> */}
      <Layout 
        style={{
          background: "#F3F3F3",
          height: "100%"
        }}
      >
        <Sider
          navList={arrList}
        />
        <Content 
          style={{
            background: "#fff",
            padding: "24px 0",
            margin: "0 10px",
          }}
        >
          <h1>停车场管理</h1>
        </Content>
      </Layout>
    </BrowserRouter>
  )
}

export default Parking;