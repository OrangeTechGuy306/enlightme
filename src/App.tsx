import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ContactPage from "./pages/Contact"
import AboutPage from "./pages/About"
import ServicesPage from "./pages/Services"
import PortfolioPage from "./pages/Portfolio"


function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}/> 
        <Route path="/contact" element={<ContactPage />}/> 
        <Route path="/about" element={<AboutPage />}/> 
        <Route path="/services" element={<ServicesPage />}/> 
        <Route path="/portfolio" element={<PortfolioPage />}/> 
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
