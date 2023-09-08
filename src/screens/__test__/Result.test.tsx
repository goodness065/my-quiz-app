import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Result from "../Result";
import * as hooks from "../../provider/QuizProvider";

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe("Result component", () => {
  it("renders the result page with appropriate content", () => {
    // Mock the values returned by useQuiz
    const mockUseQuiz = {
      handleQuit: jest.fn(),
      score: 7,
      quizSetting: {
        name: "Sample Quiz",
        no_of_questions: "10",
        category: "computer",
        difficulty: "hard",
      },
      setSelectedAnswer: jest.fn(),
      setScore: jest.fn(),
      setQuizSetting: jest.fn(),
      selectedAnswer: "djk",
    };

    jest.spyOn(hooks, "useQuiz").mockImplementation(() => mockUseQuiz);

    render(<Result />);

    // Check if the score and quiz information is rendered
    const scoreText = screen.getByText("7 / 10");
    expect(scoreText).toBeInTheDocument();

    const retakeButton = screen.getByText("Retake test");
    expect(retakeButton).toBeInTheDocument();

    const goBackButton = screen.getByText("Go back");
    expect(goBackButton).toBeInTheDocument();

    // Simulate a click on the "Retake test" button
    fireEvent.click(retakeButton);

    // Assert that the setScore and setSelectedAnswer functions were called as expected
    expect(mockUseQuiz.setScore).toHaveBeenCalledWith(0);
    expect(mockUseQuiz.setSelectedAnswer).toHaveBeenCalledWith('');

    // Simulate a click on the "Go back" button
    fireEvent.click(goBackButton);

    // Assert that the handleQuit functions were called as expected
    expect(mockUseQuiz.handleQuit).toHaveBeenCalled();
  });
});
