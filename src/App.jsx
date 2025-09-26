import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import NewsPage from "./pages/NewsPage";
import CalculatorsPage from "./pages/CalculatorsPage";
import AstrologyPage from "./pages/AstrologyPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Policies from "./policy/PoliciesPage"
import Policy2 from "./policy/Policy2";
import PoliciesPage from "./policy/PoliciesPage";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Navigation always on top */}
        <Navigation />

        {/* Main content */}
        <main className="flex-grow transition-all duration-300">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  setCurrentPage={function () {
                    throw new Error("Function not implemented.");
                  }}
                />
              }
            />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/calculators" element={<CalculatorsPage />} />
            <Route path="/astrology" element={<AstrologyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Policies route */}
            <Route path="/policies/:policyId?" element={<PoliciesPage />} />
          </Routes>
        </main>

        {/* Footer always at bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
