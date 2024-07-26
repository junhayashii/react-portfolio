import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
