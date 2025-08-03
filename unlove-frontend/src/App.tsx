import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import MainNavBar from "./components/custom/navBar";
import Selection from "./pages/test/selection";
import TwoPartnersQuickTest from "./pages/test/twoPartnersQuick";
import Results from "./pages/test/results";
import TestHelpButton from "./components/custom/testHelp";

// TODO
// Better result display
// Sliders and input renderers
// Explanation and test button in home
// Explanation in the test section
// i18n
// notify a user when its data is used for a comparison and send the same result

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <MainNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Selection />} />
        <Route
          path="/test/quick/one-partner"
          element={<TwoPartnersQuickTest />}
        />
        <Route
          path="/test/quick/two-partners"
          element={<TwoPartnersQuickTest />}
        />
        <Route
          path="/test/complete/one-partner"
          element={<TwoPartnersQuickTest />}
        />
        <Route
          path="/test/complete/two-partners"
          element={<TwoPartnersQuickTest />}
        />
        <Route path="/test/results" element={<Results />} />
      </Routes>
      {[
        "/test",
        "/test/quick/one-partner",
        "/test/quick/two-partners",
        "/test/complete/one-partner",
        "/test/complete/two-partners",
      ].includes(location.pathname) && <TestHelpButton />}
    </div>
  );
}

export default App;
