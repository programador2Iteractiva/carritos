import React from 'react'

// Cambiamos el prop a 'onSelectOption'
function Options({ options, onSelectOption }) {
  return (
    <div>
      {
        options.map((option, index) => {
          return (
            // Llamamos a la función pasando la 'option' clickeada
            <div key={index} onClick={() => onSelectOption(option)}>
              <p>{option}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Options