import React from "react";

import { Content, Header } from "./container";
import "./App.scss";
import Pricing from "./components/Pricing/Pricing";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Content />
      <Pricing />
    </div>
  );
};

export default App;
