import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../provider/QuizProvider";
import { getScoreMessage } from "../utils/scoreMessage";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { ResultImage } from "../components/svgs/images/result.image";

/**
 * Renders the result page of a quiz.
 * Retrieves necessary data and functions from the `QuizProvider` context to render the result page.
 * Handles navigation and resetting the quiz.
 *
 * @returns The rendered result page with the score, user name, and message.
 *          Buttons to retake the quiz and go back.
 */

const Result = () => {
  const history = useNavigate();
  const { handleQuit, score, quizSetting, setSelectedAnswer, setScore } =
    useQuiz();

  /**
   * Resets the quiz score and selected answer, and navigates to the quiz page.
   */
  const retakeQuiz = () => {
    setScore(0);
    setSelectedAnswer("");
    history("/quiz");
  };

  useEffect(() => {
    if (quizSetting.name.length === 0) {
      history("/details");
    }
  }, [history, quizSetting.name.length]);

  return (
      <main className="h-[100vh] bg-[#F9F9F9] layout_container w-full flex justify-center items-center">
        <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }} className="w-full mt-14 md:w-[75%] lg:w-[50%] p-5 flex flex-col items-center font-light bg-white sm:p-8 rounded-lg">
          <ResultImage />
          <h1 className="text-[#1F1F1F] text-4xl font-bold my-5">
            {score} / {quizSetting.no_of_questions}
          </h1>
          <h1 className="text-[#1F1F1F] text-xl font-bold text-center">
            {getScoreMessage(score, +quizSetting.no_of_questions)[0]}{" "}
            {quizSetting.name}.
          </h1>
          <p className="text-[#667085] text-base mb-5 text-center">
            {getScoreMessage(score, +quizSetting.no_of_questions)[1]}
          </p>

          <Button title="Retake test" onClick={retakeQuiz} />

          <Button
            title="Go back"
            onClick={handleQuit}
            variant="white"
            className="!border-none mt-5"
          />
        </motion.div>
      </main>
  );
};

export default Result;
