import React from 'react'
import Header from "../components/Header"
import Card from '../components/Card'
import Welcome from '../components/Welcome'
function Home() {
  const cards=[1,2,3]
  return (
    <div className="container">
      <Header />
      <Welcome />
      <div className="row">
      {
        cards.map((card, index) => {
          return <Card key={index} card={card} />
        }
        )
        }
        </div>
    </div>
  )
}

export default Home