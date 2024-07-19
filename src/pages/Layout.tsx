import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";

type Props = {};

const Layout = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default Layout;
