# Quiz App

This is a Quiz App built using React, Vite, TypeScript, and the open Trivia database to fetch questions. Test your knowledge and have fun!

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Home Page](#home-page)
  - [Details Page](#details-page)
  - [Quiz Page](#quiz-page)
- [HTTP Requests with Axios](#http-requests-with-axios)

## Demo

[Link to Demo](https://goody-quiz.vercel.app/)

![Demo Screenshot](src/assets/image/demo.PNG)

## Features

- **Dynamic Quiz Questions:** Retrieve quiz questions from the open Trivia database according to the user's specified category, difficulty and the number of questions they want, then present these questions to the user for their interaction.
- **Scoring:** Keep track of the user's score as they answer questions.
- **End of Quiz Summary:** Display the user's final score and a summary of their quiz performance.
- **Responsive Design:** Ensure the app looks great on various screen sizes.

## Technologies

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Trivia API](https://opentdb.com/)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and yarn installed on your system.

### Installation

```bash
git clone https://github.com/goodness065/my-quiz-app.git

cd my-quiz-app

yarn install

# to run test
yarn test
```

## Usage

### Home Page

1. To run the app and access the home page, follow these steps:

```bash
# Start the development server

yarn dev

```

2. Open your browser and visit http://127.0.0.1:5173/.

3. Click on the "Start Quiz" button on the home page to proceed to the details page.

### Details Page

1. After clicking on the "Start Quiz" button on the home page, you will be directed to the details page.

2. On the details page, you'll need to fill in the necessary details for the quiz:

   - **Name**: Enter your name.
   - **Category**: Choose a category for the quiz.
   - **Number of Questions**: Specify the number of questions you want in the quiz.
   - **Difficulty Level**: Select the desired difficulty level.

3. Once you've filled in these details, click on the "Start Quiz" button to initiate the quiz.

### Quiz Page

1. After clicking "Start Quiz" on the details page, you'll be taken to the quiz page.

2. Answer the quiz questions to the best of your ability.

3. After completing all the quiz questions, you'll have the option to submit your answers.

4. Once you've submitted your answers, you can view your quiz results, including your score and any feedback or summary provided by the app.

## HTTP Requests with Axios

This project uses Axios for making HTTP requests to the Trivia Database. Axios is a popular JavaScript library for making asynchronous HTTP requests in the browser and Node.js.

To see how Axios is used in this project, you can check the code in [src/hook/useGetQuiz.tsx](src/hook/useGetQuiz.tsx).
