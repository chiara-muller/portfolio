// import logo from './logo.svg';
// import './App.scss';

import Homepage from "./pages/homepage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage />
      </Router>
    </div>
  );
}

export default App;
