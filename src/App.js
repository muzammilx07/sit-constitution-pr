import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import ConstitutionPage from "./Pages/ConstitutionPage";
import PrinciplesPage from "./Pages/PrinciplesPage";
import About from "./Pages/About";
import DetailsPage from "./Pages/DetailsPage"; // Import the DetailsPage component
import Origins from "./Pages/Origins";
import Resources from "./Pages/Resources";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/constitution" element={<ConstitutionPage />} />
        <Route path="/principles" element={<PrinciplesPage />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/origins" element={<Origins />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/details/:id" element={<DetailsPage />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
