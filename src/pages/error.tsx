import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import './pagestyle.less'
import { useNavigate } from 'react-router-dom'
export default function error() {
  const navigate = useNavigate()
  const backToHome = () => {
    navigate('/', { replace: true })
  }
  return (
    <div className="ErrorPage">
      <div className="back" onClick={backToHome}>
        <FontAwesomeIcon className="home" icon={faHouseChimney}></FontAwesomeIcon>
      </div>
      <h1 data-t="404" className="h1">
        404
      </h1>
    </div>
  )
}
