import { posts } from '../data/posts'
import PostCard from '../components/PostCard'

export default function PostsPage() {
  return (
    <section>
      <h1>All posts</h1>
      <div className="grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
