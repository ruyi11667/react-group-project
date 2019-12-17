import React, {useCallback}from 'react'
import './style.scss'
import {useHistory} from 'react-router'
import { Layout, Menu, Button} from 'antd';
const { Header } = Layout;

const AppHeader: React.FC<{}> = function AppHeader(){
  let headerList = [
    {id: '1', title: '首页', path: '/home'},
    {id: '2', title: '停车厂管理', path: '/parking/parkManage'},
    {id: '3', title: '数据统计', path: '/dataCount'},
    {id: '4', title: '系统管理', path: '/system'},
  ]
  const history = useHistory();
  const itemClickAction = useCallback(
    (path: string) => {
      history.push(path);
    },
    [history],)

 let headerDOM = headerList.map((item,index) => (
  <Menu.Item key={index}>
    <Button type="primary" onClick={()=>itemClickAction(item.path)}>{item.title}</Button>
  </Menu.Item>
))
  return (
    <Header className="app-header">
      <div className="logo">
        <Button type="primary">Logo</Button>
        <h3 className='h3Logo'>停车场管理系统</h3>
      </div>
      <Menu
        className="menu"
        theme="light"
        mode="horizontal"
        style={{ lineHeight: '64px' }}
        defaultSelectedKeys={['0']}
      >
       { headerDOM }
      
      </Menu>
      <div className="userLogo">

      </div>
    </Header>
  )
}

export default AppHeader;