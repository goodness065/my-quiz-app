import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AppLayout } from "./components/app-layout/AppLayout";
import Home from "./screens/Home";
import { QuizProvider } from "./provider/QuizProvider";
import Details from "./screens/Details";

function App() {
  return (
    <Router>
      <QuizProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Route>
        </Routes>
      </QuizProvider>
    </Router>
  );
}

export default App;
