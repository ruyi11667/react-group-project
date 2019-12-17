import React from "react";
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Icon } from "antd";
import "./style.scss";
const { SubMenu } = Menu;
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
        {/* <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text">nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span className="nav-text">nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="nav-text">nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="user" />
          <span className="nav-text">nav 4</span>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="user" />
          <span className="nav-text">nav 5</span>
        </Menu.Item> */}
      </Menu>
    </Sider>
  );
};

export default AppSider;
