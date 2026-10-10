import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import SelectedWork from './components/SelectedWork.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import SoftSkills from './components/SoftSkills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Experience />
        <Skills />
        <SoftSkills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
