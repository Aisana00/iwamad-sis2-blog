import { useLikes } from '../context/LikesContext'

interface LikeButtonProps {
  postId: number
}

export default function LikeButton({ postId }: LikeButtonProps) {
  const { isLiked, toggleLike } = useLikes()
  const liked = isLiked(postId)

  return (
    <button
      type="button"
      className={liked ? 'like liked' : 'like'}
      aria-pressed={liked}
      onClick={() => toggleLike(postId)}
    >
      {liked ? '♥ Liked' : '♡ Like'}
    </button>
  )
}
