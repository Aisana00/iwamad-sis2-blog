import { posts } from '../data/posts'
import { useLikes } from '../context/LikesContext'
import { useAuth } from '../context/AuthContext'

export default function AccountPage() {
  const { isLiked } = useLikes()
  const { signOut } = useAuth()
  const liked = posts.filter((p) => isLiked(p.id))

  return (
    <section>
      <h1>My account</h1>
      <p>This page is only for signed-in readers.</p>
      <h2 className="section-title">Posts you liked: {liked.length}</h2>
      <ul>
        {liked.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
      <button type="button" onClick={signOut}>
        Sign out
      </button>
    </section>
  )
}
