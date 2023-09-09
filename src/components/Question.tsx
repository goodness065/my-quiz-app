import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { useQuiz } from "../provider/QuizProvider";
import { useNavigate } from "react-router-dom";
import QuitModal from "./Modal";
import { IResult } from "../hook/useGetQuiz";
import Button from "./Button";

interface IQuestions {
  currentQues: number;
  setCurrentQues(data: number): void;
  questions: IResult[];
  options: string[];
  correct: string;
}

/**
 * Renders a quiz question and handles user interactions such as selecting an answer, checking the answer, and navigating to the next question or submitting the quiz.
 * @param {number} currentQues - The index of the current question in the quiz.
 * @param {function} setCurrentQues - A function to update the value of `currentQues`.
 * @param {Array} questions - An array of objects representing the quiz questions.
 * @param {Array} options - An array of strings representing the answer options for the current question.
 * @param {string} correct - A string representing the correct answer for the current question.
 * @returns {JSX.Element} The JSX code for the quiz question and user interaction components.
 */

const Question = ({
  currentQues,
  setCurrentQues,
  questions,
  options,
  correct,
}: IQuestions) => {
  const history = useNavigate();
  const { score, setScore, setSelectedAnswer, selectedAnswer, handleQuit } =
    useQuiz();
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [openQuitModal, setOpenQuitModal] = useState<boolean>(false);

  const handleSelect = (option: string) => {
    if (selectedAnswer === option && selectedAnswer === correct) {
      return "select";
    }

    if (selectedAnswer === option && selectedAnswer !== correct) {
      return "wrong";
    }

    if (option === correct) {
      return "select";
    }
  };

  const handleCheck = (option: string) => {
    setSelectedAnswer(option);
    if (option === correct) {
      setScore(score + 1);
    }
    setError(false);
  };

  const handleNext = () => {
    if ((currentQues > questions.length - 2) && selectedAnswer.length !== 0 ) {
      setSelectedAnswer("");
      history("/result");
    } else if (selectedAnswer) {
      setCurrentQues(currentQues + 1);
      setSelectedAnswer("");
    } else {
      setError(true);
      setErrorMessage("Please select an option first");
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  const handleOpen = () => setOpenQuitModal(true);
  const handleClose = () => setOpenQuitModal(!openQuitModal);

  return (
    <div className="question">
      <div className="singleQuestion">
        <div className="flex justify-start items-start w-full pb-5 mb-5 border-b border-[#EAECF0]">
          <h1 className="text-[#1F1F1F] text-xl font-bold">
            {currentQues + 1}.
          </h1>
          {questions && (
            <span
              dangerouslySetInnerHTML={{
                __html: questions[currentQues]?.question,
              }}
              className="text-[#1F1F1F] text-xl font-bold ml-[10px]"
            />
          )}
        </div>
        <div className="options">
          {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
          {options &&
            options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleCheck(option)}
                disabled={selectedAnswer.length !== 0}
                className={`singleOption ${
                  !selectedAnswer && "singleOptionhover"
                } ${selectedAnswer && handleSelect(option)}`}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: option,
                  }}
                />
              </button>
            ))}
        </div>

        <div className="flex w-full justify-around mt-2">
          <Button variant="red" title="Quit" onClick={handleOpen} />
          <Button
            title={currentQues > questions?.length - 2 ? "Submit" : "Next"}
            onClick={handleNext}
          />
        </div>
      </div>

      <QuitModal
        title="Are you sure you want to quit?"
        open={openQuitModal}
        handleClose={handleClose}
        handleOnclick={handleQuit}
      />
    </div>
  );
};

export default Question;
