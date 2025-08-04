import React, { useEffect, useState } from "react";
import "./App.css";
import { Toaster } from "./components/ui/toaster";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Data
import portfolioData from "./data/portfolio.json";

function App() {
  const [data, setData] = useState(portfolioData);

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Preload critical images
    const criticalImages = [
      data.personal.avatar,
      ...data.projects.slice(0, 3).map(p => p.image),
      ...data.testimonials.map(t => t.avatar)
    ];

    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [data]);

  return (
    <div className="App">
      <Header data={data} />
      
      <main>
        <section id="hero">
          <Hero data={data} />
        </section>
        
        <About data={data} />
        <Projects data={data} />
        <Testimonials data={data} />
        <Contact data={data} />
      </main>
      
      <Footer data={data} />
      <Toaster />
    </div>
  );
}

export default App;