import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Options from "../components/Options";
import { useGame } from "../context/GameContext";

function Questions() {
  const { gameQuestions, currentQuestionIndex, selectAnswer, isGameFinished } =
    useGame();

  const navigate = useNavigate();
  const currentQuestion = gameQuestions[currentQuestionIndex];
 
  useEffect(() => {
    if (!currentQuestion && !isGameFinished) {
      navigate("/instrucciones");
    }
  }, [currentQuestionIndex, isGameFinished, gameQuestions, navigate]);

  const handleSelect = (option) => {
    selectAnswer(option);
    navigate("/juego/respuesta");
  };

  if (!currentQuestion) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h2>
          Elige una respuesta ({currentQuestionIndex + 1} /{" "}
          {gameQuestions.length})
        </h2>
        <p>{currentQuestion.question}</p>
        <Options
          options={currentQuestion.options}
          onSelectOption={handleSelect} // Prop 'onSelectOption'
        />
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Questions;
