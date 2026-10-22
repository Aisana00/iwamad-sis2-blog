import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { AuthProvider } from '../context/AuthContext'
import { LikesProvider } from '../context/LikesContext'
import App from '../App'

export function renderApp(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AuthProvider>
        <LikesProvider>
          <App />
        </LikesProvider>
      </AuthProvider>
    </MemoryRouter>,
  )
}
