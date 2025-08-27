import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProfilesCard from "./pages/ProfilesCard";
import ProfilesList from "./pages/ProfileList"; // check the spelling (List, not ListS)
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ marginTop: "100px" }}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* ✅ All profiles page */}
          <Route path="/profiles" element={<ProfilesList />} />

          {/* ✅ Individual profile page */}
          <Route path="/profilesCard/:id" element={<ProfilesCard />} />

          {/* 404 fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
