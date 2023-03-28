import { FC, useEffect, useState } from 'react'
import { useLocation, useMatch, useNavigate } from 'react-router-dom'
import '../pages/pagestyle.less'
interface Props extends React.PropsWithChildren<{}> {}
const Footer: FC = (props: Props) => {
  const [active, setActive] = useState(0)
  const localtion = useLocation()
  const navigate = useNavigate()
  const routerLink = (path: string) => {
    navigate(path)
  }
  const menuList = Object.freeze([
    {
      id: 0,
      path: '/',
      name: '首页',
    },
    {
      id: 1,
      path: '/center',
      name: '我的',
    },
  ])
  useEffect(() => {
    menuList.forEach((item: any) => {
      if (item.path === localtion.pathname) {
        setActive(item.id)
      }
    })
  }, [localtion.pathname])

  return (
    <div className="Footer">
      {menuList.map((item: any) => {
        return (
          <div
            key={item.id}
            className={`item ${active === item.id ? 'active' : ''}`}
            onClick={() => routerLink(item.path)}>
            {item.name}
          </div>
        )
      })}
    </div>
  )
}
export default Footer
