import React from "react";

import { Content, Header } from "./container";
import "./App.scss";
import Pricing from "./components/Pricing/Pricing";
import YoutubeVideos from './components/videos/YoutubeVideos';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Content />
      <Pricing />
      <YoutubeVideos />
    </div>
  );
};

export default App;
