import React, { lazy } from 'react'
import {Redirect} from 'react-router-dom'
import {RouteConfig} from 'react-router-config'
import parking from '@routes/children/parking.tsx'
import home from '@routes/children/home.tsx'
import system from '@routes/children/system.tsx'

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: lazy(()=>import('../pages/home')),
    // routes: home
  },
  //首页
  {
    path: '/home',
    exact: false,
    component: lazy(()=>import('../pages/home')),
    routes: home
  },
  //停车场管理
  {
    path: '/parking',
    component: lazy(()=>import('../pages/parking')),
    routes: parking
  },
  //数据统计
  {
    path: '/dataCount',
    component: lazy(()=>import('../pages/data-count'))
  },
  //系统管理
  {
    path: '/system',
    component: lazy(()=>import('../pages/system')),
    routes:system
  },
  //错误页面
  {
    path: '/error',
    component: lazy(()=>import('../pages/common/error'))
  },
  // 路径错误
  {
    path: '/not-match',
    component: lazy(()=>import('../pages/common/not-match'))
  },
  {
    path: '**',
    render: ()=>(<Redirect to="/not-match"/>)
  }

]
export default routes;