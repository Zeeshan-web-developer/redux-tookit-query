import React from 'react'
import { useGetUsersQuery } from './services/users'

function App() {
  console.log(useGetUsersQuery())
  const { data, loading, error } = useGetUsersQuery()
  return (
    <h1>Hello World</h1>
  )
}

export default App