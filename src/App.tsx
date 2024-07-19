import { ConfigProvider } from "antd";
import "./App.css";
import Layout from "./pages/Layout";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0275ff",
        },
      }}
    >
      {" "}
      <Layout />
    </ConfigProvider>
  );
}

export default App;
