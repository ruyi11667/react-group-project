import React from "react";
import { NavLink } from 'react-router-dom'
import { Layout, Menu } from "antd";
import "./style.scss";
const { Sider } = Layout;


interface NavList {
  title: string;
  path: string;
}

interface propsType {
  navList: NavList[],
}

const AppSider: React.FC<propsType> = function AppSider(props) {

  const navDom = props.navList.map((item, index)=>{
    return (
      <Menu.Item key={index}>
        <span className="nav-text">
          <NavLink to={item.path}>{item.title}</NavLink>
        </span>
      </Menu.Item>
    )
  })

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu theme="light" mode="inline" defaultSelectedKeys={["0"]}>
        {navDom}
      </Menu>
    </Sider>
  );
};

export default AppSider;
