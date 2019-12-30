import React, { Suspense, PropsWithChildren } from "react";
import {List} from 'immutable'
import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import { renderRoutes } from "react-router-config";
import Sider from "@layout/sider";
import Loading from "@pages/common/loading";
const { Content } = Layout;

const System: React.FC<PropsWithChildren<any>> = function System(props){

  const arrList = List([
    {
      title: "用户管理",
      path: "/system/userManager"
    },
    {
      title: "角色管理",
      path: "/system/roleManager"
    }
  ]);
  
  return (
    <BrowserRouter>
      <Layout
        style={{
          background: "#F3F3F3",
          height: "100%"
        }}
      >
        <Sider navList={arrList} />
        <Content
          style={{
            background: "#fff",
            padding: "24px 0",
            margin: "0 10px"
          }}
        >
          {/* 懒加载 */}
          <Suspense fallback={<Loading />}>
            {renderRoutes(props.route.routes)}
          </Suspense>
        </Content>
      </Layout>
    </BrowserRouter>
  )
}

export default System;