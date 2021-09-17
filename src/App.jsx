import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm"
import Projects from "./components/Projects"
import Footer from "./components/Footer";
import "./app.scss"
import { useState } from "react";

function App() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  return (
    <div className="app">
      <Header hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen}/>
      <div className="sections">
        <About/>
        <Projects/>
        <ContactForm/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
