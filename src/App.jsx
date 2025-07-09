import Header from "./components/Header"
import Hero from "./components/Hero"
import LogoGenerator from "./components/LogoGenerator"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
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
