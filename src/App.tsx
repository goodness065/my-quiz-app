import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AppLayout } from "./components/app-layout/AppLayout";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
