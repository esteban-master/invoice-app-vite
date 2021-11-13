import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { api } from '../../api'

const getPosts = async () => {
  const { data } = await api.get(`http://localhost:3001/posts`)
  return data
}

export const Home = () => {
  const postsQuery = useQuery('posts', getPosts)
  return (
    <div>
      <h1>Home</h1>
      {postsQuery.isLoading && <p>Cargando...</p>}
      {postsQuery.isSuccess && postsQuery.data ? (
        <div>
          <ul>
            {postsQuery.data.map((p: any) => (
              <li key={p.id}>{p.name}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
