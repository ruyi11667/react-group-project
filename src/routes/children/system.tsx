import { lazy } from 'react'
import {RouteConfig} from 'react-router-config';


const routes: RouteConfig[] = [
  
  {
    path: '/system/userManager',
    component: lazy(()=>import('@pages/system/children/userManager'))
  },
  {
    path: '/system/roleManager',
    component: lazy(()=>import('@pages/system/children/roleManager'))
  }
]


export default routes;