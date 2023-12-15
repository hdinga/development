import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import vars from "./components/_globalvars";
import "./styles/styles.scss";

export default function App() {

  // custom console message
  const devMessage = [
    "font-family: Sans-Serif",
    "font-size: 0.7rem",
    "color: #FF4343",
    "padding: 0.25rem 0.5rem",
    "background: #192226",
    "border-radius: 0.25rem"
  ].join(';');

  console.log("%c© "+vars.siteName+" "+vars.currentYear, devMessage);

  return (
    <>
    <Preloader />
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
