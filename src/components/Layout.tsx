import { NavLink, Outlet } from 'react-router'
import { useAuth } from '../context/AuthContext'

export default function Layout() {
  const { signedIn, signOut } = useAuth()

  return (
    <div className="app">
      <header className="header">
        <NavLink to="/" end className="logo">
          My Blog
        </NavLink>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/account">Account</NavLink>
          {signedIn ? (
            <button type="button" className="link-btn" onClick={signOut}>
              Sign out
            </button>
          ) : (
            <NavLink to="/login">Sign in</NavLink>
          )}
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">© 2026 My Blog · IWaMAD SIS 2</footer>
    </div>
  )
}
