import React from 'react'
import { screen } from '@testing-library/react'
import { Home } from './index'
import { renderWithQueryClientAndRouter } from '../../test/util'
import { delay, mockData } from '../../mocks/handlers'

const delayApi = delay + 100

describe('Test Home', () => {
  test('Deberia encontrar el titulo', async () => {
    renderWithQueryClientAndRouter(<Home />, {})
    expect(screen.getByText(/cargando.../i)).toBeInTheDocument()
    expect(await screen.findByText(mockData[0].name, {}, { timeout: delayApi }))
  })
})
