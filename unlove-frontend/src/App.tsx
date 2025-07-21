import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import MainNavBar from "./components/custom/navBar";
import Selection from "./pages/test/selection";
import TwoPartnersQuickTest from "./pages/test/twoPartnersQuick";

// TODO
// i18n
// notify a user when its data is used for a comparison and send the same result

function App() {
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
      </Routes>
    </div>
  );
}

export default App;
