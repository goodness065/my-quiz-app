import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useQuiz } from "../provider/QuizProvider";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import { categories } from "../utils/data/Categories";

const Details = () => {
  const history = useNavigate();
  const { quizSetting, setQuizSetting } = useQuiz();
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = () => {
    if (
      !quizSetting.category ||
      !quizSetting.difficulty ||
      !quizSetting.name ||
      !quizSetting.no_of_questions
    ) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    } else {
      setError(false);
      history("/quiz");
    }
  };

  return (
    <main className="min-h-[100vh] bg-[#F9F9F9] layout_container w-full flex justify-center items-center">
      <div className="w-full mt-14 md:w-[75%] lg:w-[50%] p-5 flex flex-col items-center font-light bg-white sm:p-8 rounded-lg">
        <span className="text-3xl text-[#101828] font-bold">
          Fill in your details
        </span>
        <span className="text-base text-[#667085] font-normal mt-3">
          Welcome, Please enter your details.
        </span>
        <div className="flex flex-col pt-5 justify-evenly w-full">
          {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
          <TextField
            label="Enter your name"
            variant="outlined"
            className="!mb-6"
            value={quizSetting.name}
            onChange={(e) => {
              const updatedFormState = {
                ...quizSetting,
                name: e.target.value,
              };
              setQuizSetting(updatedFormState);
            }}
          />
          <TextField
            select
            label="Select category"
            className="!mb-6"
            variant="outlined"
            inputProps={{ "data-testid": "category-input" }}
            value={quizSetting.category}
            onChange={(e) => {
              const updatedFormState = {
                ...quizSetting,
                category: e.target.value,
              };
              setQuizSetting(updatedFormState);
            }}
          >
            {categories.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            inputProps={{ "data-testid": "difficulty-input" }}
            className="!mb-6"
            value={quizSetting.difficulty}
            onChange={(e) => {
              const updatedFormState = {
                ...quizSetting,
                difficulty: e.target.value,
              };
              setQuizSetting(updatedFormState);
            }}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <TextField
            select
            label="Select Number of questions"
            className="!mb-6"
            inputProps={{ "data-testid": "number-input" }}
            value={quizSetting.no_of_questions}
            onChange={(e) => {
              const updatedFormState = {
                ...quizSetting,
                no_of_questions: e.target.value,
              };
              setQuizSetting(updatedFormState);
            }}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {[...Array(10)].map((_, index) => (
              <MenuItem key={index} value={index + 1}>
                {index + 1}
              </MenuItem>
            ))}
          </TextField>

          <Button
            onClick={handleSubmit}
            className="w-full"
            title="Start Quiz"
          />
        </div>
      </div>
    </main>
  );
};

export default Details;
