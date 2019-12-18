import React ,{Suspense, PropsWithChildren, useEffect} from 'react'
import { BrowserRouter } from "react-router-dom";
import { Layout, Icon } from "antd";
import { renderRoutes } from "react-router-config";
import Sider from "@layout/sider";
import Loading from "@pages/common/loading";
const { Content } = Layout;

const Home: React.FC<PropsWithChildren<any>> = function Home(props){
  const arrList = [
    {
      title: '中原福塔停车场',
      path: '/home/parking/1'
    },
    {
      title: '国际陆港停车场',
      path: '/home/parking/2'
    },
    {
      title: '深圳宝安停车场',
      path: '/home/parking/3'
    },
    {
      title: '上海浦东停车场',
      path: '/home/parking/4'
    }
  ]
  const showList = (
    <ul className='listItems'>
      <li className='listItem1'>
        <h1 className='listTitle'>停车场列表</h1>
      </li>
      <li className='listItem2'>
        <input type="text" placeholder='请输入停车场名称' className='listIpt'/>
        <i className='listIcon'><Icon type="search" /></i>
      </li>
      <li className='listItem3'>3</li>
    </ul>
  )
  
  useEffect(() => {
    console.log(1111);
    console.log(props);
    
    console.log(props.location.pathname);
    if(props.location.pathname === '/home' || props.location.pathname === '/' ) {
      window.location.replace('/home/parking/1');
    }
    
    // props.route.push('home/parking/1');

    // 
    
  },[])
  
  return (
    <BrowserRouter>
    <Layout
      style={{
        background: "#F3F3F3",
        height: "100%"
      }}
    >
      <Sider navList={arrList} children={showList}/>
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

export default Home;