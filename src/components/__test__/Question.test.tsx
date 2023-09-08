import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Question from "../Question";

// Mock the useNavigate function from react-router-dom
jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

const questions = [
    {
      question: "what is 2 + 2?",
      incorrect_answers: ["3", "4", "5"],
      correct_answer: "4",
      category: "computer",
    },
    {
      question: "what is 4 + 2?",
      incorrect_answers: ["3", "4", "5"],
      correct_answer: "4",
      category: "computer",
    },
  ];

describe("Question component", () => {
  it("should render the current question text", () => {
    // Arrange
    const currentQues = 0;
    const setCurrentQues = jest.fn();
    const options = ["Option 1", "Option 2", "Option 3"];
    const correct = "Option 1";

    // Act
    render(
      <Question
        currentQues={currentQues}
        setCurrentQues={setCurrentQues}
        questions={questions}
        options={options}
        correct={correct}
      />
    );

    // Assert
    expect(screen.getByText("what is 2 + 2?")).toBeInTheDocument();
    expect(screen.queryByText("what is 4 + 2?")).not.toBeInTheDocument();
    expect(screen.queryByText("what is 7 + 2?")).not.toBeInTheDocument();
  });

  it("should display an error message when an option is not selected and the next button is clicked", () => {
    // Set up
    const currentQues = 0;
    const setCurrentQues = jest.fn();
    const options = ["Option 1", "Option 2", "Option 3"];
    const correct = "Option 1";

    // Render the component
    render(
      <Question
        currentQues={currentQues}
        setCurrentQues={setCurrentQues}
        questions={questions}
        options={options}
        correct={correct}
      />
    );

    // Click the next button without selecting an option
    fireEvent.click(screen.getByText("Next"));

    // Assert
    expect(
      screen.getByText("Please select an option first")
    ).toBeInTheDocument();

    // Cleanup
    cleanup();
  });
});
