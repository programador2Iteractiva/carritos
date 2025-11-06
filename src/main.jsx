import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Instructions from './views/Instructions';
import Questions from './views/Questions';
import Home from './views/Home';
import Answer from './views/Answer';
import Thanks from './views/Thanks';
import Form from './views/Form';
import './index.css'
import { AuthProvider } from './context/AuthContext';
import { GameProvider } from './context/GameContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "formulario",
    element: <Form />,
  },
  {
    path: "instrucciones",
    element: <Instructions />,
  },
  {
    path: "juego",
    children: [
      {
        path: "pregunta",
        element: <Questions />,
      },
      {
        path: "respuesta",
        element: <Answer />,
      },
    ]
  },
  {
    path: "gracias",
    element: <Thanks />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <GameProvider>
        <RouterProvider router={router} />
      </GameProvider>
    </AuthProvider>
  </StrictMode>,
)
