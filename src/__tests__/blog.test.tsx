import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { posts } from '../data/posts'
import { renderApp } from './renderApp'

describe('Blog', () => {
  it('shows one card per post in the array', () => {
    renderApp('/posts')
    expect(screen.getAllByTestId('post-card')).toHaveLength(posts.length)
  })

  it('like button changes when clicked', async () => {
    const user = userEvent.setup()
    renderApp('/posts/1')
    const button = screen.getByRole('button', { name: /like/i })
    expect(button).toHaveTextContent('♡ Like')
    await user.click(button)
    expect(button).toHaveTextContent('♥ Liked')
  })

  it('protected page shows sign-in when signed out, opens after sign-in', async () => {
    const user = userEvent.setup()
    renderApp('/account')
    expect(screen.getByRole('heading', { name: 'Sign in' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Sign in' }))
    expect(screen.getByRole('heading', { name: 'My account' })).toBeInTheDocument()
  })

  it('unknown URL shows the 404 page', () => {
    renderApp('/banana')
    expect(screen.getByText(/404/)).toBeInTheDocument()
  })

  it('unknown post id shows a clear message', () => {
    renderApp('/posts/999')
    expect(screen.getByRole('heading', { name: 'Post not found' })).toBeInTheDocument()
  })
})
