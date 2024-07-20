import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Header from "./layout/Header";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div className="w-full layout duration-300 bg-gray-100">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default Layout;
