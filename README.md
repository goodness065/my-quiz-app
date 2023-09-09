# Quiz App

This is a Quiz App built using React, Vite, TypeScript, and the open Trivia database to fetch questions. Test your knowledge and have fun!

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [HTTP Requests with Axios](#http-requests-with-axios)

## Demo

[Link to Demo](https://goody-quiz.vercel.app/) *(Add a link to your live demo if available)*

![Demo Screenshot](src/assets/image/demo.PNG)

## Features

- **Dynamic Quiz Questions:** Fetch trivia questions from the Trivia API and display them to users.
- **Scoring:** Keep track of the user's score as they answer questions.
- **End of Quiz Summary:** Display the user's final score and a summary of their quiz performance.
- **Responsive Design:** Ensure the app looks great on various screen sizes.

## Technologies

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [Trivia API](https://opentdb.com/)

## Installation

   ```bash
   git clone https://github.com/goodness065/my-quiz-app.git

   cd my-quiz-app

   yarn install
   
   yarn run dev
   ```

## HTTP Requests with Axios

This project uses Axios for making HTTP requests to the Trivia Database. Axios is a popular JavaScript library for making asynchronous HTTP requests in the browser and Node.js.

To see how Axios is used in this project, you can check the code in [src/hook/useGetQuiz.tsx](src/hook/useGetQuiz.tsx).
