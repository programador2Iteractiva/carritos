import React from 'react'

function Options({ options }) {
  return (
    <div>
      {
        options.map(option => {
          <div>
            <p>{option}</p>
          </div>
        })
      }
    </div>

  )
}

export default Options