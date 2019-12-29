import { lazy } from 'react'
import {RouteConfig} from 'react-router-config';


const routes: RouteConfig[] = [
  
  {
    path: '/system/userManager',
    component: lazy(()=>import('@pages/system/children/userManager')),
    exact:true
  },
  {
    path:'/system/userManager/edit/:id',
    component: lazy(()=>import('@pages/system/children/userManager/sysUser/edit'))
  },
  {
    path: '/system/roleManager',
    component: lazy(()=>import('@pages/system/children/roleManager'))
  }
]

export default routes;