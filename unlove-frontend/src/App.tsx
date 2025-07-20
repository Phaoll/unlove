import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import MainNavBar from "./components/custom/navBar";
import Selection from "./pages/test/selection";
import TwoPartnersShortTest from "./pages/test/2p-short";

// TODO
// i18n

function App() {
  return (
    <div className="App">
      <MainNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Selection />}>
          <Route index element={<Navigate to="2p-short" replace />} />
          <Route path="2p-short" element={<TwoPartnersShortTest />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
