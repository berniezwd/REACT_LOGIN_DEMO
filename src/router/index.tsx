import { createBrowserRouter, createHashRouter } from 'react-router-dom'
import NeedAuth from '../pages/NeedAuth'
import Login from '../pages/login'
import Main from '../pages/main'
import Center from '../pages/center'

import { PokemonListLoader } from '../pages/main'

export const routes = [
  {
    path: '/',
    element: <NeedAuth />,
    meta: {
      auth: false,
    },
    children: [
      {
        index: true,
        path: '',
        element: <Main />,
        loader: PokemonListLoader,
        meta: {
          title: '主页',
          auth: false,
        },
      },
      {
        path: 'login',
        element: <Login />,
        meta: {
          title: '登录',
          auth: false,
        },
      },
      {
        path: 'center',
        element: <Center />,
        meta: {
          title: '个人中心',
          auth: true,
        },
      },
    ],
  },
]
const router = createHashRouter(routes)
export default router
