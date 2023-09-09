/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useQuiz } from "../provider/QuizProvider";

export interface IResult {
  category: string;
  incorrect_answers: string[];
  correct_answer: string;
  question: string;
}

export interface IQuizData {
  results: IResult[];
}

/**
 * Fetches quiz data from an API based on the user's quiz settings.
 * @returns An array containing the quiz data, loading state, error state, and the fetch function.
 */

export const useGetQuiz = (): [
  { data: IQuizData | undefined; loading: boolean; error: any },
  () => Promise<void>
] => {
  const { quizSetting } = useQuiz();

  const [data, setData] = useState<IQuizData>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  const fetch = useCallback(async () => {
    setLoading(true);
    try {
      const quiz = await axios.get(
        `https://opentdb.com/api.php?amount=${quizSetting.no_of_questions}&category=${quizSetting.category}
       &difficulty=${quizSetting.difficulty}`
      );
      setData(quiz.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [
    quizSetting.category,
    quizSetting.difficulty,
    quizSetting.no_of_questions,
  ]);

  useEffect(() => {
    const getGetQuiz = async () => {
      fetch();
    };
    getGetQuiz();
  }, [
    quizSetting.category,
    quizSetting.difficulty,
    quizSetting.no_of_questions,
    fetch,
  ]);

  return [{ data, loading, error }, fetch];
};
