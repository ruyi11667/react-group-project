import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Layout } from "antd";
import Header from "./layout/header";
import Sider from "./layout/sider";
import routes from "./routes";
import Loading from "./pages/common/loading";
const { Content } = Layout;

const App: React.FC<{}> = function App() {
  return (
    <BrowserRouter>
      {/* 布局 */}
      <Layout className="app">
        {/* 头部 */}
        <Header />
        <Layout>
          {/* 内容 */}
          <Content
            style={{
              background: "#fff",
              margin: 0,
              height: "100%"
            }}
          >
            {/* 懒加载 */}
            <Suspense fallback={<Loading />}>{renderRoutes(routes)}</Suspense>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
