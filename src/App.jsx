import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import LogoGenerator from "./components/LogoGenerator/LogoGenerator"
import Testimonials from "./components/Testimonials/Testimonials"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import "./App.css"

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <LogoGenerator />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
