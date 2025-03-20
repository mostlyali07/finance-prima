import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MainChat from "./pages/MainChat";

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route  path="/chat" element={<MainChat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
