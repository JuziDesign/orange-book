import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AppLayout } from "@src/layout/layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* <Route path='about' element /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
