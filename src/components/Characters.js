import React from 'react'
import Card from './Card'

export default function Characters({ characters, addToAlive }){

  const displayCharacters = () => {
    return characters.map(character => {
      return <Card key={character.char_id} character={character} addToAlive={addToAlive}/>
    })
  }

  return (
    <div className='characters'>
      {displayCharacters()}
    </div>
  )
}