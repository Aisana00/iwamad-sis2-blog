import { Navigate, Outlet, useLocation } from 'react-router'
import { useAuth } from '../context/AuthContext'

export default function RequireAuth() {
  const { signedIn } = useAuth()
  const location = useLocation()

  if (!signedIn) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return <Outlet />
}
