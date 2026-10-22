import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { posts } from '../data/posts'
import LikeButton from '../components/LikeButton'

export default function PostPage() {
  const { id } = useParams()
  const [showComments, setShowComments] = useState<boolean>(false)

  const post = posts.find((p) => p.id === Number(id))

  if (!post) {
    return (
      <section className="notice">
        <h1>Post not found</h1>
        <p>There is no post with id “{id}”.</p>
        <Link to="/posts">← Back to all posts</Link>
      </section>
    )
  }

  return (
    <article className="post">
      <Link to="/posts">← All posts</Link>
      <h1>{post.title}</h1>
      <p className="meta">
        {post.date} · {post.author}
      </p>
      {post.body.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      <div className="post-actions">
        <LikeButton postId={post.id} />
        <button
          type="button"
          className="link-btn"
          onClick={() => setShowComments((v) => !v)}
        >
          {showComments ? 'Hide comments' : 'Show comments'}
        </button>
      </div>

      {showComments && (
        <div className="comments">
          <p>
            <strong>Reader:</strong> Great post, thanks!
          </p>
        </div>
      )}
    </article>
  )
}
