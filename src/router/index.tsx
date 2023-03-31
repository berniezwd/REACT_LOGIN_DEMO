import { createBrowserRouter, createHashRouter } from 'react-router-dom'
import NeedAuth from '../pages/NeedAuth'
import Login from '../pages/login'
import Main, { PokemonListLoader } from '../pages/main'
import Center from '../pages/center'
import Detail, { getPokemonDetail } from '../pages/detail'
import Error from '../pages/error'

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
        path: 'detail/:name',
        element: <Detail />,
        loader: getPokemonDetail,
        meta: {
          title: '口袋怪兽详情',
          auth: true,
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
  {
    path: '*',
    element: <Error />,
    meta: {
      title: '404',
      auth: false,
    },
  },
]
const router = createHashRouter(routes, {
  basename: '/',
})
export default router
