import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { render, RenderOptions } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

export const testingQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // desactiva los reintentos en testing
      retry: false
    }
  }
})

export function renderWithQueryClientAndRouter(
  ui: React.ReactElement,
  {
    options = {},
    initialRoutes = ['/']
  }: { options?: RenderOptions; initialRoutes?: string[] }
) {
  return render(ui, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={testingQueryClient}>
        <MemoryRouter initialEntries={initialRoutes}>{children}</MemoryRouter>
      </QueryClientProvider>
    ),
    ...options
  })
}
