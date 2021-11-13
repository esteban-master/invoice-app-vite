import axios from 'axios'
export const API_URL = import.meta.env.VITE_API_URL as string

export const api = axios.create({
  baseURL: import.meta.env.MODE === 'test' ? 'http://localhost:3001' : API_URL
})
