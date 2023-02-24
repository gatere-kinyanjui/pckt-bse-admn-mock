import { useState } from "react";
import "./App.css";
import AdminSignIn from "./components/AdminSignIn";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <AdminSignIn />
    </div>
  );
};

export default App;
