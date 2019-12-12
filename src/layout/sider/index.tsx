import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import './style.scss'
const { SubMenu } = Menu;
const { Sider } = Layout;


const AppSider: React.FC<{}> = function AppSider(){
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
      <div className="logo" />
      <Menu theme="light" mode="inline" defaultSelectedKeys={['0']}>
        <Menu.Item key="1">
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
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default AppSider;