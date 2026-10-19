import { useEffect } from "react";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Work from "./sections/Work";
import Process from "./sections/Process";
import Experience from "./sections/Experience";
import Faq from "./sections/Faq";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

// One observer for every .reveal element on the page.
const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

const App = () => {
  useReveal();
  return (
    <>
      <a href="#main" className="fixed left-4 top-4 z-50 -translate-y-24 rounded-full bg-ink px-4 py-2 text-sm text-paper focus:translate-y-0">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <Work />
        <Process />
        <Experience />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
