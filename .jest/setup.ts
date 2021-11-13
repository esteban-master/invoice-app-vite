import '@testing-library/jest-dom'
import { mockServer } from '../src/mocks/server'
import nodeFetch from 'node-fetch'
global.fetch = nodeFetch as any

beforeAll(() => mockServer.listen())
afterEach(() => mockServer.resetHandlers())
afterAll(() => mockServer.close())
