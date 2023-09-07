import axios from "axios";
import { useGetQuiz, IQuizData } from "../useGetQuiz";
import { renderHook } from "@testing-library/react-hooks";

jest.mock("axios"); // Mock axios to simulate API calls

describe("useGetQuiz hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("fetches quiz data successfully", async () => {
    const mockQuizData: IQuizData = {
      results: [
        {
          category: "General Knowledge",
          incorrect_answers: ["False"],
          correct_answer: "True",
          question: "Is this a test question?",
        },
      ],
    };

    // Mock axios.get to resolve with the mockQuizData
    (axios.get as jest.Mock).mockResolvedValue({ data: mockQuizData });

    const { result, waitForNextUpdate } = renderHook(() => useGetQuiz());

    // Ensure loading is true initially
    expect(result.current[0].loading).toBe(true);

    // Wait for the hook to fetch data
    await waitForNextUpdate();

    // Ensure loading is false after data fetching
    expect(result.current[0].loading).toBe(false);

    // Ensure data is set correctly
    expect(result.current[0].data).toEqual(mockQuizData);
    expect(result.current[0].error).toBeUndefined();
  });

  it("handles fetch error", async () => {
    const errorMessage = "An error occurred while fetching the data.";

    // Mock axios.get to reject with an error
    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    const { result, waitForNextUpdate } = renderHook(() => useGetQuiz());

    // Ensure loading is true initially
    expect(result.current[0].loading).toBe(true);

    // Wait for the hook to handle the error
    await waitForNextUpdate();

    // Ensure loading is false after error handling
    expect(result.current[0].loading).toBe(false);

    // Ensure data is undefined
    expect(result.current[0].data).toBeUndefined();

    // Ensure error is set correctly
    expect(result.current[0].error?.message).toBe(errorMessage);
  });
});
