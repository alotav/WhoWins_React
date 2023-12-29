import Nav from "./Components/Nav/Nav";
import AboutUs from "./Components/AboutUs/AboutUs";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import Lottery from "./Components/Lottery/Lottery";
import Footer from "./Components/Footer/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HowItWorks />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="/lottery" element={<Lottery />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;
