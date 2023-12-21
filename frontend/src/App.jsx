import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Surveys from "./pages/surveys";
import Survey from "./pages/survey";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/surveys" element={<Surveys />} />
        <Route path="/surveys/:id" element={<Survey />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
