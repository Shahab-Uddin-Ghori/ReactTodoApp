import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import TopBar from "./TopBar";

const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 ">
      <Nav />
      <TopBar />
    </div>
  );
};

App();
export default App;
