import {lazy} from 'react'
import {RouteConfig} from 'react-router-config'

const routers: RouteConfig[] = [
  {
    path: '/home/parking/:id',
    component: lazy(()=> import('@pages/home/children/parking'))
  }
]

export default routers;