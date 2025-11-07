import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../services/apiService'; 

function Form() {
  // Obtenemos 'gameAnswers' del contexto
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      await registerUser(data);
      
      setLoading(false);
      navigate('/instrucciones');

    } catch (err) {
      setLoading(false);
      setError(err.message || "Ocurrió un error inesperado. Intenta de nuevo.");
      console.error("Fallo al enviar los datos:", err);
    }
  };

  return (
    <div>
      <div><img src="" alt="" /></div>
      <div>
        <h2>Ingresa tus datos</h2>
        <form onSubmit={handleSubmit}>
          {/* (Inputs del formulario - sin cambios) */}
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre"
            required
            disabled={loading}
          />
          <input
            type="text"
            id="identificacion"
            name="identificacion"
            placeholder="N. de Identificación"
            required
            disabled={loading}
          />
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Teléfono"
            required
            disabled={loading}
          />
          <input
            type="email"
            id="mail"
            name="mail"
            placeholder="Mail"
            required
            disabled={loading}
          />
          <input
            type="text"
            id="vehicle"
            name="vehicle"
            placeholder="Tipo de vehiculo"
            required
            disabled={loading}
          />
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="terminos"
              name="terminos"
              required
              disabled={loading}
            />
            <label htmlFor="terminos">Acepto términos y condiciones</label>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar'}
          </button>

          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default Form