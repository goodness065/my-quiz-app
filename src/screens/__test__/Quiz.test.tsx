/* eslint-disable @typescript-eslint/ban-ts-comment */
import { fireEvent, render, screen } from "@testing-library/react";
import Quiz from "../Quiz";
import "@testing-library/jest-dom";
import * as hooks from "../../hook/useGetQuiz";

// Mock the react-router-dom useNavigate hook
jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

// Mock the useQuiz hooks
jest.mock("../../provider/QuizProvider.tsx", () => ({
  useQuiz: () => ({
    quizSetting: { name: "Test User" },
    setSelectedAnswer: jest.fn(),
    selectedAnswer: "",
    setScore: jest.fn(),
  }),
}));

describe("Quiz component", () => {
  it("renders loading state", () => {
    // Mock loading state
    jest.mock("../../hook/useGetQuiz", () => ({
      useGetQuiz: () => [
        {
          data: null,
          loading: true,
        },
      ],
    }));

    render(<Quiz />);

    // Check if loading spinner is rendered
    const loadingSpinner = screen.getByRole("progressbar");
    expect(loadingSpinner).toBeInTheDocument();
  });

  it("renders quiz when data is available", async () => {
    jest.spyOn(hooks, "useGetQuiz").mockReturnValue([
      {
        data: {
          results: [
            {
              question: "what is 2+2?",
              category: "Test Category",
              correct_answer: "Correct Answer",
              incorrect_answers: ["Incorrect 1", "Incorrect 2", "Incorrect 3"],
            },
          ],
        },
        loading: false,
        //@ts-ignore
        error: null,
      },
    ]);

    render(<Quiz />);

    // Check if quiz content is rendered
    const quizTitle = screen.getByText("what is 2+2?");
    const quizCorrectAnswer = screen.getByText(
      "Correct Answer"
    );
    const restartButton = screen.getByText("Restart");

    expect(quizTitle).toBeInTheDocument();
    expect(quizCorrectAnswer).toBeInTheDocument();
    expect(restartButton).toBeInTheDocument();
  });

    it('displays quit modal when quit button is clicked', () => {
      render(<Quiz />);

      // Click the quit button
      const quitButton = screen.getByText('Quit');
      fireEvent.click(quitButton);

      // Check if the quit modal is displayed
      const quitModal = screen.getByText('Are you sure you want to quit?');
      expect(quitModal).toBeInTheDocument();
    });
});
