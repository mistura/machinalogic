import { Route, Routes } from 'react-router-dom'
import AboutUs from './AboutUs'
import Contact from './Contact'
import HomePage from './HomePage'
import Industries from './Industries'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Solutions from './Solutions'

export default function RouteList() {
  return (
   <div className="w-screen layout duration-300 shrink h-screen overflow-y-scroll overflow-x-hidden">
      <Header position={'fixed'} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}
