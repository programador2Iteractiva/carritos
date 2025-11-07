import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../context/GameContext";
import { logUserAction } from "../services/apiService";

function Answers() {
  const {
    currentProduct,
    nextQuestion,
    currentQuestionIndex,
    gameQuestions,
    gameAnswers
  } = useGame();

  const sendGameData = async () => {
    try {
      await logUserAction(gameAnswers);
      console.log("Datos del juego enviados exitosamente.");
    } catch (error) {
      console.error("Error al enviar los datos del juego:", error);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {

    if (!currentProduct) {
      navigate("/juego/pregunta");
    }
  }, [currentProduct, navigate]);

  const handleNext = () => {
    if (currentQuestionIndex >= gameQuestions.length - 1) {
      sendGameData();
      navigate("/gracias"); 
    } else {
      nextQuestion();
      navigate("/juego/pregunta");
    }
  };

  if (!currentProduct) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        {/* Mostramos la imagen y nombre del producto */}
        <div>
          <img src={currentProduct.image} alt={currentProduct.productName} />
        </div>
        <div>
          <p>{currentProduct.productName}</p>
        </div>

        {/* Botón de Siguiente */}
        <button onClick={handleNext}>Siguiente</button>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Answers;
