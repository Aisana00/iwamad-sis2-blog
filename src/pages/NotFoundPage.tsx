import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <section className="notice">
      <h1>404 — Page not found</h1>
      <p>This page does not exist.</p>
      <Link to="/">← Go to Home</Link>
    </section>
  )
}
