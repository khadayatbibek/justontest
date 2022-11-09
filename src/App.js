import Home from "./pages/home/Home";

import NotFound from "./pages/notfound/Notfound";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Report from "./pages/report/Report";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route exact path="report" element={<Report />}></Route>

          <Route exact path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
