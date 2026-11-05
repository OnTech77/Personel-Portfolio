import { ThemeProvider } from './context/ThemeContext.jsx';
import Header from './components/Header.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
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
    <ThemeProvider>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <SelectedWork />
        <About />
        <Experience />
        <Skills />
        <SoftSkills />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
