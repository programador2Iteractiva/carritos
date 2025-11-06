import React from 'react'
import Options from '../components/Options'

function Questions() {
  return (
    <div>
      <div><img src="" alt="" /></div>
      <div>
        <h2>Elige una respuesta</h2>
        <p>¿Qué tipo de superficie predomina
          en el interior de tu carro?</p>
        <Options options={[]} />
      </div>
      <div><img src="" alt="" /></div>
    </div>
  )
}

export default Questions