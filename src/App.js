import { useState } from "react";
import PreLandingPage from "./components/pre-landing";
import LandingPage from "./components/landing";
import "./styles.scss";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const viewToRender = () => {
    switch (currentPage) {
      case 0:
        return <PreLandingPage changePage={() => setCurrentPage(1)} />;
      case 1:
        return <LandingPage />;
      default:
        return null;
    }
  };

  return <>{viewToRender()}</>;
}

export default App;
