import React from 'react'
import { useGetRandomQuoteQuery } from './services/users'

function App() {
  console.log(useGetRandomQuoteQuery())
  const { data, loading, error } = useGetRandomQuoteQuery()
  return (
    <h1>Hello World</h1>
  )
}

export default App