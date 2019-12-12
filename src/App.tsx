import React, {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import { Layout} from 'antd'
import Header from './layout/header'
import Sider from './layout/sider'
import routes from './routes'
import Loading from './pages/common/loading'
const { Content } = Layout;


const App: React.FC<{}> = function App(){
  return (
    <BrowserRouter>

        {/* 布局 */}
        <Layout className="app">

          {/* 头部 */}
          <Header/>
          <Layout>
            {/* 侧边栏 */}
            <Sider/>
            <Layout style={{ padding: '0 12px' }}>
            
              {/* 内容 */}
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >

                {/* 懒加载 */}
                <Suspense fallback={<Loading/>}>
                  {renderRoutes(routes)}
                </Suspense>

              </Content>

            </Layout>
          </Layout>
        </Layout>
    </BrowserRouter>
  )
 
}

export default App;