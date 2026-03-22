import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import TeamMemberAdd from "./pages/teamMemberAdd";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/team-members" element={<TeamMemberAdd />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
