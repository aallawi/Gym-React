import React, { useEffect } from "react";
import "./App.css";
import { Benefits } from "./components/Benefits";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Pricing } from "./components/Pricing";
import { Ready } from "./components/Ready";
import { Testimonials } from "./components/Testimonials";

import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Home />
        <Benefits />
        <Ready />
        <Pricing />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}

export default App;
