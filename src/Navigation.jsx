import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;
