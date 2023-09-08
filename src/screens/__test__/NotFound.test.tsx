import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotFound from "../NotFound";
import { BrowserRouter } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("NotFound component", () => {
  it("renders the 404 page with appropriate content", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    // Check if the "THIS PAGE YOU REQUESTED CAN NOT BE FOUND." text is rendered
    const errorMessageText = screen.getByText(
      "THIS PAGE YOU REQUESTED CAN NOT BE FOUND."
    );
    expect(errorMessageText).toBeInTheDocument();

    // Check if the "Go home" button is rendered
    const goHomeButton = screen.getByText("Go home");
    expect(goHomeButton).toBeInTheDocument();
  });
});
