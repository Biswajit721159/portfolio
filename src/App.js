import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About/>}></Route>
          <Route path="Projects" element={<Projects/>}></Route>
          <Route path="Contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
