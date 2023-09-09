import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { motion } from "framer-motion";

import { useQuiz } from "../provider/QuizProvider";
import Button from "../components/Button";
import { IResult, useGetQuiz } from "../hook/useGetQuiz";
import Question from "../components/Question";
import QuitModal from "../components/Modal";
import { ArrowRight } from "../components/svgs/icons/arrow-left.icon";
import { Refresh } from "../components/svgs/icons/refresh.icon";

/**
 * The `Quiz` function is a React component that represents a quiz page. It fetches quiz data from an API using the `useGetQuiz` hook and displays the questions and options to the user. It also handles user interactions such as selecting an answer, navigating to the next question, and restarting the quiz.
 *
 * @returns JSX elements representing the quiz page.
 */

const Quiz = () => {
  const history = useNavigate();
  const [{ data, loading }] = useGetQuiz();
  const { quizSetting, setSelectedAnswer, setScore } = useQuiz();
  const [options, setOptions] = useState<string[] | undefined>();
  const [currentQues, setCurrentQues] = useState<number>(0);
  const [openBackModal, setOpenBackModal] = useState<boolean>(false);
  const [openRefreshModal, setOpenRefreshModal] = useState<boolean>(false);

  useEffect(() => {
    // Handle beforeunload event
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "Are you sure you want to leave this page?";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    setScore(0);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Set options for the current question
    if (data && data?.results.length !== 0) {
      setOptions(
        handleShuffle([
          data?.results[currentQues]?.correct_answer,
          ...data.results[currentQues].incorrect_answers,
        ])
      );
    }

    if (quizSetting.name.length === 0) {
      history("/details");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQues, data]);

  const handleShuffle = (options: string[]) => {
    return options.sort(() => Math.random() - 0.5);
  };

  const handleBack = () => {
    // Reset selected answer and navigate to details page
    setSelectedAnswer("");
    history("/details");
  };

  const handleRestart = () => {
    // Reset current question, score, and selected answer
    setCurrentQues(0);
    setScore(0);
    setSelectedAnswer("");
    setOpenRefreshModal(false);
  };

  const handleOpen = () => setOpenBackModal(true);
  const handleClose = () => setOpenBackModal(!openBackModal);
  const handleRefreshOpen = () => setOpenRefreshModal(true);
  const handleRefreshClose = () => setOpenRefreshModal(!openRefreshModal);

  return (
    <div className="min-h-[100vh] bg-[#F9F9F9] layout_container w-full flex flex-col justify-center items-center">
      {loading ? (
        <CircularProgress color="inherit" size={150} thickness={1} />
      ) : (
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="w-full mt-14 md:w-[95%] lg:w-[80%] p-5 font-light bg-white sm:p-8 rounded-lg"
        >
          <div className="w-full">
            <div className="flex justify-between items-start sm:mb-6">
              <div className="flex justify-start items-start">
                <Button
                  onClick={handleOpen}
                  icon={<ArrowRight />}
                  variant="white"
                  className="w-10 h-10 !p-0"
                />
                <div className="mx-6 hidden sm:block">
                  <h1 className="text-[#1F1F1F] text-2xl font-bold">
                    {data?.results[0].category}
                  </h1>
                  <p className="text-[#667085] text-sm">
                    Select the correct answer from the following
                  </p>
                </div>
              </div>
              <div>
                <Button
                  title="Restart"
                  icon={<Refresh />}
                  variant="white"
                  onClick={handleRefreshOpen}
                />
              </div>
            </div>
            <div className="block sm:hidden w-full mb-6 mt-2">
              <h1 className="text-[#1F1F1F] text-xl font-bold">
                {data?.results[0].category}
              </h1>
              <p className="text-[#667085] text-sm">
                Select the correct answer from the following
              </p>
            </div>
            <Question
              currentQues={currentQues}
              setCurrentQues={setCurrentQues}
              questions={data?.results as IResult[]}
              options={options as string[]}
              correct={data?.results[currentQues]?.correct_answer as string}
            />
          </div>
        </motion.div>
      )}
      <QuitModal
        title="Are you sure you want a refresh??"
        open={openRefreshModal}
        handleClose={handleRefreshClose}
        handleOnclick={handleRestart}
      />

      <QuitModal
        title="Are you sure you want to go back to form page?"
        open={openBackModal}
        handleClose={handleClose}
        handleOnclick={handleBack}
      />
    </div>
  );
};

export default Quiz;
