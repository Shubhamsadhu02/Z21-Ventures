import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import './Styles/global.css'
import Home from './Components/Home';
import Investment from "./Components/Investment";
import OurTeam from "./Components/OurTeam";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/investment" element={<Investment />} ></Route>
        <Route path="/ourteam" element={<OurTeam />} ></Route>
        <Route path="/contactus" element={<ContactUs />} ></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
