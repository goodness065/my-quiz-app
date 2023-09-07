import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import resultImage from "../assets/image/result-image.svg";
import { useQuiz } from "../provider/QuizProvider";
import { getScoreMessage } from "../utils/scoreMessage";
import Button from "../components/Button";

const Result = () => {
    const history = useNavigate();
    const { handleQuit, score, quizSetting, setSelectedAnswer, setScore } = useQuiz();

    const retakeQuiz = () => {
        setScore(0)
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
      <div className="w-full mt-14 md:w-[75%] lg:w-[50%] p-5 flex flex-col items-center font-light bg-white sm:p-8 rounded-lg">
        <img src={resultImage} alt="" />
        <h1 className="text-[#1F1F1F] text-4xl font-bold my-5">{score} / {quizSetting.no_of_questions}</h1>
        <h1 className="text-[#1F1F1F] text-xl font-bold text-center">
          {getScoreMessage(score, +(quizSetting.no_of_questions))[0]} {quizSetting.name}.
        </h1>
        <p className="text-[#667085] text-base mb-5 text-center">{getScoreMessage(score, +(quizSetting.no_of_questions))[1]}</p>

        <Button title="Retake test" onClick={retakeQuiz} />

        <Button title="Go back" onClick={handleQuit} variant="white" className="!border-none mt-5"/>

      </div>
    </main>
  );
};

export default Result;
