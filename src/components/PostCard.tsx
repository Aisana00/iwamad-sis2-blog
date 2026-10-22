import { Link } from 'react-router'
import type { Post } from '../types'
import LikeButton from './LikeButton'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="card" data-testid="post-card">
      <p className="meta">
        {post.date} · {post.author}
      </p>
      <h2>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.excerpt}</p>
      <div className="card-footer">
        <span className="tags">{post.tags.map((t) => `#${t}`).join(' ')}</span>
        <LikeButton postId={post.id} />
      </div>
    </article>
  )
}
