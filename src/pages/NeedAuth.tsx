import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { matchRoutes, Navigate, Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/footer'
import { routes } from '../router/index'
interface Props extends React.PropsWithChildren<{}> {}
const NeedAuth: FC = (props: Props) => {
  const localtion = useLocation()
  const isLogin = useSelector((state: any) => state.userInfo.isLogin)
  const mathchs = matchRoutes(routes, localtion) as Record<string, any>
  console.log('location', mathchs[mathchs.length - 1].route.path)

  // 重定向地址
  const preLocation = {
    pathname: mathchs[mathchs.length - 1].route.path,
  }

  useEffect(() => {
    document.title = mathchs[mathchs.length - 1].route.meta.title
  }, [localtion.pathname])

  // 判断是否需要登录
  const isNeedLogin = mathchs?.some((item: Record<string, any>) => {
    const route = item.route as any
    if (route.meta.auth) {
      return route.meta.auth
    }
  })

  // 判断是否登录 isNeedLogin && !isLogin

  return (
    <>
      {localtion.pathname !== '/login' && <Footer />}
      {isNeedLogin && !isLogin ? (
        <Navigate to="/login" replace state={preLocation} />
      ) : (
        <>
          <Outlet />
        </>
      )}
    </>
  )
}
export default NeedAuth
