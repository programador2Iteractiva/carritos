import React from 'react'

function Form() {
  return (
    <div>
      <div><img src="" alt="" /></div>
      <div>
        <h2>Ingresa tus datos</h2>
        <form action="">
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre"
            required
          />
          <input
            type="text"
            id="identificacion"
            name="identificacion"
            placeholder="N. de Identificación"
            required
          />
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Teléfono"
            required
          />
          <input
            type="email"
            id="mail"
            name="mail"
            placeholder="Mail"
            required
          />
          <input
            type="text"
            id="vehicle"
            name="vehicle"
            placeholder="Tipo de vehiculo"
            required
          />
          <div class="form-group checkbox-group">
            <input
              type="checkbox"
              id="terminos"
              name="terminos"
              required
            />
            <label for="terminos">Acepto términos y condiciones</label>
          </div>
        </form>
      </div>
      <div>
        <div onClick={() => console.log(first)}><img src="" alt="" /></div>
      </div>
    </div>
  )
}

export default Form