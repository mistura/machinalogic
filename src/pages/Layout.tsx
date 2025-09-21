import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Footer from "./layout/Footer";
import RouteList from "./RouteList";
import Header from "./layout/Header";

const Layout = () => {
  return (
    <div className="w-screen layout duration-300 shrink h-screen overflow-y-scroll overflow-x-hidden">
      <Header position={'fixed'} bg="bg-transparent" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<RouteList/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Layout;
