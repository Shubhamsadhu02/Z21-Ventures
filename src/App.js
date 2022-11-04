import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import './Styles/global.css';
import Home from './Components/Home';
import Investment from "./Components/Investment";
import OurTeam from "./Components/OurTeam";
import ContactUs from "./Components/ContactUs";
import './Styles/responsive.css';
import OurPortfolio from "./Components/OurPortfolio";
import Community from "./Components/Community";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/investment" element={<Investment />} ></Route>
        <Route path="/ourteam" element={<OurTeam />} ></Route>
        <Route path="/contactus" element={<ContactUs />} ></Route>
        <Route path="/portfolio" element={<OurPortfolio />} ></Route>
        <Route path="/community" element={<Community/>} ></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
