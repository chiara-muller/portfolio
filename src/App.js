import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";

// If we want to change the page, this is how we do :

// import About from "./pages/about";
// import Projects from "./pages/projects";
// import Contact from "./pages/contact";



function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
