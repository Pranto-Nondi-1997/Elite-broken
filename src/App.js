import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Heroes from './components/Heroes.js'
import SideCard from './components/SideCard'

const App = () => {
  const [heroes, setHeroes] = useState([])
  const [heroesCard, setHeroesCard] = useState([])

  useEffect(() => {
    fetch('./breakingBad.JSON')
      .then((res) => res.json())
      .then((data) => setHeroes(data))
  }, [])
  const hereosToCard = (heroCard) => {
    const newCard = [...heroesCard, heroCard]
    setHeroesCard(newCard)
  }

  return (
    <div className='container'>
      <Header />
      <div className='row'>
        <div className='col-9'>
          <div className='row row-cols-1 row-cols-lg-3 row-cols-md-3  mt-3 py-3'>
            {heroes.map((hero) => (
              <div className='col' key={hero.char_id}>
                <Heroes hero={hero} hereosToCard={hereosToCard} />
              </div>
            ))}
          </div>
        </div>
        <div className='col-3'>
          <div className='row row-cols-1  mt-3 py-3'>
            <SideCard heroesCard={heroesCard} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App