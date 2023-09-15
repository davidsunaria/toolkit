import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Layout from "./layouts/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
const Shipment = React.lazy(() => import('./pages/shipment'));

function App() {
  return (
    <div className="App">
        <Layout>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Shipment />
          </Suspense>
        </Layout>
    </div>
  );
}
export default App;
