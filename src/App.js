import React from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <div className="app__body">
        <SideBar />
        <Feed />
      </div>
      {/* Widgets */}
    </div>
  );
}

export default App;
