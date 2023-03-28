import { ChangeEvent, ChangeEventHandler, FormEvent, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'

type TField = 'Username' | 'Password'
type TEvent = ChangeEvent<HTMLInputElement>
type TParams = {
  username: string
  password: string
}

export default function login() {
  const localtion = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [params, setParams] = useState<TParams>({
    username: '',
    password: '',
  })
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const submitWithLoginAction = () => {
    try {
      Object.values(params).forEach((item: string) => {
        if (!item) {
          throw new Error(`未校验通过`)
        }
      })
      const redirectPath = localtion.state ? localtion.state.pathname : '/'
      navigate(redirectPath, { replace: true })
      dispatch({
        type: 'userInfoSlice/setLoginStatus',
        payload: {
          isLogin: true,
          username: `Pikachu`,
        },
      })
    } catch (error) {
      console.log('error', error)
    }
  }
  const usernameChange = (event: TEvent, field: TField) => {
    if (field === 'Username') {
      setParams({ ...params, username: event.target.value })
    } else {
      setParams({ ...params, password: event.target.value })
    }
  }
  return (
    <div className="Login">
      <img className="logo" src={Logo} alt="" />
      <div className="form">
        <input
          value={params.username}
          ref={usernameRef}
          type="text"
          placeholder="请输入用户名"
          onChange={(e) => usernameChange(e, 'Username')}
        />
        <input
          value={params.password}
          ref={passwordRef}
          type="password"
          placeholder="请输入密码"
          onChange={(e) => usernameChange(e, 'Password')}
        />
        <button onClick={submitWithLoginAction}>登录</button>
      </div>
      <div className="forget">忘记密码?</div>
    </div>
  )
}
