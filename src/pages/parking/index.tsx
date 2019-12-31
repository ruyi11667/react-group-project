import React, { Suspense, PropsWithChildren, useEffect } from "react";
import { List } from 'immutable'
import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import { renderRoutes } from "react-router-config";
import Sider from "@layout/sider";
import Loading from "@pages/common/loading";
import './style.scss'
const { Content } = Layout;

const Parking: React.FC<PropsWithChildren<any>> = function Parking(props) {

  const arrList = List([
    {
      title: "停车场管理",
      path: "/parking/parkManage"
    },
    {
      title: "停车位管理",
      path: "/parking/spotManage"
    },
    {
      title: "计费规则管理",
      path: "/parking/billingManage"
    },
    {
      title: "车位卡管理",
      path: "/parking/cardManage"
    },
    {
      title: "设备管理",
      path: "/parking/equipmentManage"
    }
  ]);

  useEffect(() => {
    console.log('a')
  })
  return (
    <BrowserRouter>
      <Layout
        style={{
          background: "#F3F3F3",
          height: "100%"
        }}
      >
        <Sider navList={arrList}/>
        <Content
          style={{
            background: "#fff",
            padding: "24px 20px",
            margin: "0 10px",
            position: 'relative'
          }}
        >
          {/* 懒加载 */}
          <Suspense fallback={<Loading />}>
            {renderRoutes(props.route.routes)}
          </Suspense>
        </Content>
      </Layout>
    </BrowserRouter>
  );
};

export default Parking;
