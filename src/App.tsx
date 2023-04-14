import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Shipment } from "./pages/shipment";
import Layout from "./layouts/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Layout>
          <Shipment />
        </Layout>
    </div>
  );
}
export default App;
