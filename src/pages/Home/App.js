import "../../App.css";
import TopMenu from "../../components/Menu/TopMenu";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import { Footer } from "../../components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage"
import ProjectsPage from "../ProjectsPage"

function App() {
  const [isLoading, setIsLoading] = useState(
    document.readyState !== "complete"
  );

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="App font-sans">
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <TopMenu />
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
