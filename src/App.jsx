import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from '../src/Components/Hero.jsx'
import Nav from '../src/Components/Nav.jsx'
import Footer from './Components/footer.jsx'
import Cta from "./Components/Cta.jsx";

import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx"
import Dashboard from "./pages/Dashboard.jsx";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>
          <Nav />
          <Hero />
          <Cta />
          <Footer />
        </div>} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
