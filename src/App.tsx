import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DemoPage from "./components/screens/DemoCode";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/abc" element={<DemoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
