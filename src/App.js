import React from "react";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import Widgets from "./Widgets.js";
import  "./App.css";


function App() {
  return (
    //BEM 
    <div className="app">
      {/* Sidebar  */}
      <Sidebar />
      {/* feed */}
      <Feed />
      {/* widgets */}
      <Widgets />
    </div>
  );
}

export default App;
