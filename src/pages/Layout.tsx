import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Header from "./layout/Header";
import AboutUs from "./AboutUs";

const Layout = () => {
  return (
    <div className="w-screen layout duration-300 shrink h-screen overflow-y-scroll overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
};

export default Layout;
