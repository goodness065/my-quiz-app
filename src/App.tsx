import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AppLayout } from "./components/app-layout/AppLayout";
import Home from "./screens/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
