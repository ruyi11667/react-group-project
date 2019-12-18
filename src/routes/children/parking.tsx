import { lazy } from 'react'
import {RouteConfig} from 'react-router-config'

const routes: RouteConfig[] = [
  
  {
    path: '/parking/parkManage',
    component: lazy(()=>import('@pages/parking/children/parkManage'))
  },
  {
    path: '/parking/spotManage',
    component: lazy(()=>import('@pages/parking/children/spotManage'))
  },
  {
    path: '/parking/billingManage',
    component: lazy(()=>import('@pages/parking/children/billingManage'))
  },
  {
    path: '/parking/cardManage',
    component: lazy(()=>import('@pages/parking/children/cardManage'))
  },
  {
    path: '/parking/equipmentManage',
    component: lazy(()=>import('@pages/parking/children/equipmentManage'))
  }
]

export default routes;