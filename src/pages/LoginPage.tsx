import { useNavigate, useLocation } from 'react-router'
import { useAuth } from '../context/AuthContext'

interface FromState {
  from?: string
}

export default function LoginPage() {
  const { signedIn, signIn, signOut } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state as FromState | null
  const from = state?.from ?? '/account'

  function handleSignIn() {
    signIn()
    navigate(from, { replace: true })
  }

  return (
    <section className="notice">
      <h1>Sign in</h1>
      {signedIn ? (
        <>
          <p>You are signed in.</p>
          <button type="button" onClick={signOut}>
            Sign out
          </button>
        </>
      ) : (
        <>
          <p>Sign in to open your account page.</p>
          <button type="button" onClick={handleSignIn}>
            Sign in
          </button>
        </>
      )}
    </section>
  )
}
