import React, { createContext, useContext, useState } from "react";
import questionsData from "../data/Questions.json";

const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const GameContext = createContext(undefined);

export function GameProvider({ children }) {
  const [gameQuestions, setGameQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [gameAnswers, setGameAnswers] = useState({});

  const startGame = () => {
    const categories = [
      "limpiezaExterior",
      "limpiezaInterior",
      "potenciaMantenimiento",
      "accesoriosAmbientadores",
      "motoBici",
    ];
    const selectedQuestions = categories.map((category) => {
      const questionsInCategory = questionsData[category];
      const randomIndex = Math.floor(
        Math.random() * questionsInCategory.length
      );
      return questionsInCategory[randomIndex];
    });
    setGameQuestions(shuffleArray(selectedQuestions));
    setCurrentQuestionIndex(0);
    setCurrentProduct(null);
    setGameAnswers({}); // Reseteamos las respuestas al iniciar
  };

  const selectAnswer = (selectedOption) => {
    const question = gameQuestions[currentQuestionIndex];

    setCurrentProduct(question);

    setGameAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question.question]: selectedOption,
    }));
  };

  const nextQuestion = () => {
    setCurrentProduct(null);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const isGameFinished =
    currentQuestionIndex >= gameQuestions.length && gameQuestions.length > 0;

  return (
    <GameContext.Provider
      value={{
        gameQuestions,
        currentQuestionIndex,
        currentProduct,
        startGame,
        selectAnswer,
        nextQuestion,
        isGameFinished,
        gameAnswers,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame debe ser usado dentro de un GameProvider");
  }
  return context;
}
