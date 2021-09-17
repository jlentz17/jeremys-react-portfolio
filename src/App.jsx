import React from "react";
import "./app.scss"
import About from "./components/About";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm"
import Projects from "./components/Projects"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header/>
      <main className="sections">
        <About/>
        <Projects/>
        <ContactForm/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
