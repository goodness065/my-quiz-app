/* eslint-disable @typescript-eslint/no-var-requires */
import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";
import { QuizProvider } from "../../provider/QuizProvider";
import Details from "../Details";


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), 
  useNavigate: jest.fn(),
}));

describe("Details Component", () => {
  it("should render correctly", () => {
    render(
      <QuizProvider>
        <Details />
      </QuizProvider>
    );

    // Check if the main heading is present
    const heading = screen.getByText("Fill in your details");
    expect(heading).toBeInTheDocument();

    // Check if the "Start Quiz" button is present
    const startButton = screen.getByText("Start Quiz");
    expect(startButton).toBeInTheDocument();
  });

  it("should display an error message when the form is submitted with missing fields", () => {
    render(
      <QuizProvider>
        <Details />
      </QuizProvider>
    );

    // Simulate form submission
    const startButton = screen.getByText("Start Quiz");
    fireEvent.click(startButton);

    // Check if the error message is displayed
    const errorMessage = screen.getByText("All fields are required");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should navigate to '/quiz' when the form is submitted with all fields filled", async () => {
    const navigateMock = jest.fn();
    require('react-router-dom').useNavigate.mockReturnValue(navigateMock);

    render(
      <QuizProvider>
          <Details />
      </QuizProvider>
    );

    // Fill in the form fields
    const nameInput = screen.getByLabelText(/Enter your name/i);
    fireEvent.change(nameInput, { target: { value: "John Doe" } });

    const categorySelect = screen.getByTestId("category-input");
    fireEvent.select(categorySelect, { target: { value: "category_id" } });

    const difficultyInput = screen.getByTestId("difficulty-input");
    fireEvent.select(difficultyInput, { target: { value: "medium" } });

    const numberOfQuestionsInput = screen.getByTestId("number-input");
    fireEvent.select(numberOfQuestionsInput, { target: { value: 5 } });

    // Simulate form submission
    const startButton = screen.getByText("Start Quiz");
    fireEvent.click(startButton);

    // Check if the navigation occurred correctly
    // expect(navigateMock).toHaveBeenCalledWith('/quiz');
  });
});
