import { render, fireEvent } from "@testing-library/react";
import { QuizProvider, useQuiz } from "../QuizProvider";
import "@testing-library/jest-dom";

// Mock the react-router-dom useNavigate hook
jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

describe("QuizProvider", () => {
  it("renders children and provides quiz context", () => {
    const { getByTestId } = render(
      <QuizProvider>
        <div data-testid="child-component">Child Component</div>
      </QuizProvider>
    );

    const childComponent = getByTestId("child-component");
    expect(childComponent).toBeInTheDocument();
  });

  it("sets and provides quiz settings", () => {
    const TestComponent = () => {
      const { quizSetting, setQuizSetting } = useQuiz();

      const updateQuizSetting = () => {
        setQuizSetting({
          name: "Test Quiz",
          category: "Category",
          difficulty: "Easy",
          no_of_questions: "10",
        });
      };

      return (
        <>
          <div data-testid="name">{quizSetting.name}</div>
          <button onClick={updateQuizSetting} data-testid="update-button">
            Update Quiz Setting
          </button>
        </>
      );
    };

    const { getByTestId } = render(
      <QuizProvider>
        <TestComponent />
      </QuizProvider>
    );

    const nameElement = getByTestId("name");
    expect(nameElement).toHaveTextContent("");

    const updateButton = getByTestId("update-button");
    fireEvent.click(updateButton);

    expect(nameElement).toHaveTextContent("Test Quiz");
  });

  it("sets and provides quiz score", () => {
    const TestComponent = () => {
      const { score, setScore } = useQuiz();

      const updateScore = () => {
        setScore(42);
      };

      return (
        <>
          <div data-testid="score">{score}</div>
          <button onClick={updateScore} data-testid="update-button">
            Update Score
          </button>
        </>
      );
    };

    const { getByTestId } = render(
      <QuizProvider>
        <TestComponent />
      </QuizProvider>
    );

    const scoreElement = getByTestId("score");
    expect(scoreElement).toHaveTextContent("0");

    const updateButton = getByTestId("update-button");
    fireEvent.click(updateButton);

    expect(scoreElement).toHaveTextContent("42");
  });
});
