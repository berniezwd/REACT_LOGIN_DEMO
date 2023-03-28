import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Avatar from '../assets/avatar.png'
import { TAction } from '../store/modules/userInfo'
export default function center() {
  const username = useSelector((state: { userInfo: TAction }) => state.userInfo.username)
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/login', { replace: true })
    localStorage.removeItem('persist:userInfo')
  }
  return (
    <>
      <div className="Center">
        <img className="avatar" src={Avatar} alt="" />
        <p>{username}</p>
        <button className="logout" onClick={handleLogout}>
          退出登录
        </button>
      </div>
    </>
  )
}
