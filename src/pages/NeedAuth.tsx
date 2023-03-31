import React, { FC } from "react";
import { useSelector } from "react-redux";
import { matchRoutes, Navigate, Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer";
import { routes } from "../router/index";
interface Props extends React.PropsWithChildren<{}> {}
const NeedAuth: FC = (props: Props) => {
  const localtion = useLocation();
  const isLogin = useSelector((state: any) => state.userInfo.isLogin);
  const mathchs = matchRoutes(routes, localtion);
  console.log('location',location)

  // 重定向地址
  const preLocation = {
    pathname: location.pathname,
  };

  // 判断是否需要登录
  const isNeedLogin = mathchs?.some((item) => {
    const route = item.route as any;
    if (route.meta.auth) {
      return route.meta.auth;
    }
  });

  // 判断是否登录 isNeedLogin && !isLogin

  return (
    <>
      {localtion.pathname !== "/login" && <Footer />}
      {isNeedLogin && !isLogin ? (
        <Navigate to="/login" replace state={preLocation} />
      ) : (
        <>
          <Outlet />
        </>
      )}
    </>
  );
};
export default NeedAuth;
