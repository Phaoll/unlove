import { Routes, Route } from "react-router-dom";
import "./App.css";

// Create these components or import them when you have them
function Home() {
  return <div>Home Page</div>;
}

function About() {
  return <div>About Page</div>;
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
