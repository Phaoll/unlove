import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import MainNavBar from "./components/custom/navBar";
import Selection from "./pages/test/selection";
import TwoPartnersShortTest from "./pages/test/2p-short";

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
          element={<TwoPartnersShortTest />}
        />
        <Route
          path="/test/quick/two-partners"
          element={<TwoPartnersShortTest />}
        />
        <Route
          path="/test/complete/one-partner"
          element={<TwoPartnersShortTest />}
        />
        <Route
          path="/test/complete/two-partners"
          element={<TwoPartnersShortTest />}
        />
      </Routes>
    </div>
  );
}

export default App;
