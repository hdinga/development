import { BrowserRouter, Routes, Route } from "react-router-dom";

import Preloader from "./components/Preloader";
import vars from "./components/_globalvars";
import "./styles/styles.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import ProjectNotehubAlerts from "./pages/ProjectNotehubAlerts";

export default function App() {

  // custom console message styling
  const consoleStyle1 = [
    "font-family: Sans-Serif",
    "font-size: 0.7rem",
    "color: #FF4343",
    "padding: 0.25rem 0.25rem 0.25rem 0.5rem",
    "background: #192226",
    "border-radius: 0.25rem 0rem 0rem 0.25rem"
  ].join(';');
  const consoleStyle2 = [
    "font-family: Sans-Serif",
    "font-size: 0.7rem",
    "color: #FFF",
    "padding: 0.25rem 0.5rem 0.25rem 0.25rem",
    "background: #192226",
    "border-radius: 0rem 0.25rem 0.25rem 0rem"
  ].join(';');

  console.log('%c© '+vars.siteName+' '+vars.currentYear+'%c—  '+vars.siteCaption, consoleStyle1, consoleStyle2); // initialize console message

  return (
    <>
    <Preloader />
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/notehub-alerts" element={<ProjectNotehubAlerts />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
