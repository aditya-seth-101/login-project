
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import FeedTableAdmin from './FeedTableAdmin'
const AdminPanel = () => {
  const location = useLocation()
  const isAdmin = location.state.isAdmin
  const renText = "Sorry you are not an admin"
  return (
    <div>

      <Navbar user={location.state} />
      {isAdmin ? <FeedTableAdmin /> : <h1>{renText}</h1>}

    </div>
  )
}

export default AdminPanel