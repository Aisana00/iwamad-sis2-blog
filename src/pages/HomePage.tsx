import { Link } from 'react-router'
import { posts } from '../data/posts'
import PostCard from '../components/PostCard'

export default function HomePage() {
  const latest = posts.slice(-2).reverse()

  return (
    <section>
      <h1>Welcome to my blog</h1>
      <p className="lead">
        Notes from a student learning React, TypeScript and testing.
      </p>
      <h2 className="section-title">Latest posts</h2>
      <div className="grid">
        {latest.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <p>
        <Link to="/posts">See all posts →</Link>
      </p>
    </section>
  )
}
