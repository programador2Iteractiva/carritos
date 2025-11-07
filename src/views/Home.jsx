import React from 'react'
import { Link } from 'react-router-dom' // Importar Link

function Home() {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h1>Es eI momento de conocer
          eI ritual del cuidado
          que necesita tu uehícula</h1>
        <h2>¿Estás listo?</h2>
        {/* Botón para navegar a las instrucciones */}
        <Link to="/instrucciones">
          <button>¡Estoy listo!</button>
        </Link>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Home