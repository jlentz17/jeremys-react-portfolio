import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm"
import Projects from "./components/Projects"
import Footer from "./components/Footer";
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Header/>
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
