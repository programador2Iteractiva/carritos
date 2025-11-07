import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../context/GameContext'

function Instructions() {
  const { startGame } = useGame();
  const navigate = useNavigate();

  const handleStartGame = () => {
    startGame(); // Prepara las 5 preguntas aleatorias
    navigate('/juego/pregunta'); // Navega a la primera pregunta
  }

  return (
    <div>
      <div><img src="" alt="" /></div>
      <div>

        <div>
          <img src="" alt="" />
          <p>Selecciona la respuesta más
            adecuada para ti, por cada
            categoría.</p>
        </div>

        <div>
          <img src="" alt="" />
          <p>EI sistema seleccionará el producto
            que necesitas para tu vehículo,
            según tu respuesta.</p>
        </div>

        <div>
          <img src="" alt="" />
          <p>Da clic en siguiente y conoce el kit
            del ritual del cuidado perfecto para ti.</p>
        </div>

        {/* Botón para comenzar el juego */}
        <button onClick={handleStartGame}>Comenzar</button>

      </div>
      <div><img src="" alt="" /></div>

    </div>
  )
}

export default Instructions