/* eslint-disable react-refresh/only-export-components */
import React, { useState, createContext, useMemo, useContext } from "react";
import { useNavigate } from "react-router-dom";

export interface QuizProviderProps {
  children: React.ReactNode | React.ReactNode | React.ReactNode[];
}

export type IQuizSetting = {
  name: string;
  category: string;
  difficulty: string;
  no_of_questions: string;
};

export type QuizProviderValues = {
  quizSetting: IQuizSetting;
  setQuizSetting(data: IQuizSetting): void;
  score: number;
  selectedAnswer: string;
  setScore(data: number): void;
  setSelectedAnswer(data: string): void;
  handleQuit(): void;
};

export const DEFAULT_QUIZSETTING: IQuizSetting = {
  category: "",
  difficulty: "",
  no_of_questions: "",
  name: "",
};

export const QuizContext = createContext<QuizProviderValues>({
  quizSetting: DEFAULT_QUIZSETTING,
  setQuizSetting() {},
  score: 0,
  selectedAnswer: "",
  setScore() {},
  setSelectedAnswer() {},
  handleQuit() {},
});

/**
* A custom hook that provides access to the quiz context and its related functions.
* Returns: The quiz context and its related functions.
* Example: const { quizSetting, setQuizSetting, score, setScore, selectedAnswer, setSelectedAnswer, handleQuit } = useQuiz();
 */

export const useQuiz = () => {
  return useContext(QuizContext);
};

export const QuizProvider = ({ children }: QuizProviderProps) => {
  const history = useNavigate();
  const [quizSetting, setQuizSetting] =
    useState<IQuizSetting>(DEFAULT_QUIZSETTING);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  
  const handleQuit = useMemo(() => {
    const memoHandleQuit = () => {
      setQuizSetting({
        category: "",
        difficulty: "",
        no_of_questions: "",
        name: "",
      });
      setScore(0)
      setSelectedAnswer("");
      history("/details");
    };
    return memoHandleQuit;
  }, [setQuizSetting, setSelectedAnswer, history]);

  const value = useMemo<{
    quizSetting: IQuizSetting;
    setQuizSetting(data: IQuizSetting): void;
    score: number;
    setScore(data: number): void;
    selectedAnswer: string;
    setSelectedAnswer(data: string): void;
    handleQuit(): void;
  }>(
    () => ({
      quizSetting,
      setQuizSetting,
      score,
      setScore,
      selectedAnswer,
      setSelectedAnswer,
      handleQuit
    }),
    [
      quizSetting,
      setQuizSetting,
      score,
      setScore,
      selectedAnswer,
      setSelectedAnswer,
      handleQuit
    ]
  );

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
