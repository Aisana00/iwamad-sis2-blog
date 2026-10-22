import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type Likes = Record<number, boolean>

interface LikesValue {
  isLiked: (postId: number) => boolean
  toggleLike: (postId: number) => void
}

const LikesContext = createContext<LikesValue | null>(null)

export function LikesProvider({ children }: { children: ReactNode }) {
  const [likes, setLikes] = useState<Likes>({})

  const value: LikesValue = {
    isLiked: (postId) => likes[postId] === true,
    toggleLike: (postId) =>
      setLikes((prev) => ({ ...prev, [postId]: !prev[postId] })),
  }

  return <LikesContext.Provider value={value}>{children}</LikesContext.Provider>
}

export function useLikes(): LikesValue {
  const ctx = useContext(LikesContext)
  if (!ctx) throw new Error('useLikes must be used inside LikesProvider')
  return ctx
}
