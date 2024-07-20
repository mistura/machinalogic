import { ConfigProvider } from "antd";
import "./App.css";
import Layout from "./pages/Layout";
import Nav from "./pages/layout/Nav";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0275ff",
        },
      }}
    >
      <div className="flex items-center bg-gray-100">
        <Layout />
        <Nav />
      </div>
    </ConfigProvider>
  );
}

export default App;
