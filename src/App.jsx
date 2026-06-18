import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-[#00FFFF] relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}

export default App
