import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Shipment } from "./pages/shipment";
import { StoreProvider } from "easy-peasy";
import store from "../src/store";
import Layout from "./layouts/Layout";

function App() {
  return (
    <div className="App">
      <StoreProvider store={store}>
        <Layout>
          <Shipment />
        </Layout>
      </StoreProvider>
    </div>
  );
}
export default App;
