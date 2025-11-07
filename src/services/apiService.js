import { API_BASE_URL } from '../config/config.js';

export const registerUser = async (formData) => {
  const apiData = {
    email: formData.mail,
    name: formData.nombre,
    dni: formData.identificacion,
    phone: formData.telefono,
    type_car: formData.vehicle
  };
  const endpoint = `${API_BASE_URL}/register-user-login/`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(apiData),
    });
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Error ${response.status}: ${errorData.message || response.statusText}`);
    }

    let res = await response.json()
    localStorage.setItem('token', res.access)

    return res
  } catch (error) {
    console.error("Error en el servicio registerUser:", error);
    throw error;
  }
};


export const logUserAction = async (answers) => {
  const answersJsonString = JSON.stringify(answers);

  const token = localStorage.getItem('token')
  
  const apiData = {
    action: "Finalizar cuestionario",
    answers_json: answersJsonString
  };

  const endpoint = `${API_BASE_URL}/user-action-log/`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(apiData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Error ${response.status}: ${errorData.message || response.statusText}`);
    }

    return await response.json();

  } catch (error) {
    console.error("Error en el servicio logUserAction:", error);
    throw error;
  }
};