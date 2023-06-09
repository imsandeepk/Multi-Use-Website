import Header from "./components/Header";
import Data from "./components/Data";
import QR from "./components/QR";
import {
  BrowserRouter as Router,
  Switch,
  Route,Routes,
  Link
} from "react-router-dom";
import Dictoniaries from "./components/Dictoniaries";


function App() {
  return (
    <>
    <Router>
      <Header />
      
      <div className="bg-dark vh-auto min-vh-100 ">
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/QR" element={<QR />} />
        <Route path="/dict" element={<Dictoniaries/>} />
      </Routes>
      </div>
    </Router>

    </>
  );
}

export default App;
