import React, { useCallback, useEffect, useState } from 'react'
import Card from './components/Card/Card'
import Search from './components/Search/Search'
import db from './database/db'

const App = () => {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    setCharacters(db)
  }, [])

  return (
    <>
      <Search />
      <div style={{
        width: '100%',
        display: 'flex',
        gap: '2em',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: "2em"
      }}>

        {
          characters.length > 0
            ?
            characters.map((item, index) => (
              <Card
                key={index}
                name={item.name}
                health={item.health} 
                attack={item.attack}
                kiRestoreSpeed={item.kiRestoreSpeed}
                defense={item.defense}
                gender={item.gender}
                img={item.img}
                />
            )
            )
            : <h1>Cargando ...</h1>
        }
      </div>
    </>
  )


}

export default App