import React from "react";
import "./app.scss"
import About from "./components/About/index.jsx";
import Header from "./components/Header/index.jsx";
import ContactForm from "./components/ContactForm/index.jsx"
import Projects from "./components/Projects/index.jsx"
import Footer from "./components/Footer/index.jsx";

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
