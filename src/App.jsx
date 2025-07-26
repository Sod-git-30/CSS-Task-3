import React from "react";
import "./index.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div
      className="bg-cover bg-center min-h-screen text-white "
      style={{ backgroundImage: "url('/graduated-students-throwin.jpg')" }}
    >
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
