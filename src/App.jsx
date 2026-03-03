import Header from './components/headerNav'
import Hero from './components/Hero'
import About from './components/about' 
import Freelance from './components/freelance'
import ContactForm from './components/contact'
import Project from './components/project'
import Footer from './components/footer'

function App() {
  return (
    <>
       <Header />
          <main>
            <Hero />
            <About />
            <Project />
            <ContactForm />
            <Freelance />
             <Footer />
          </main>
    </>
  )
}

export default App


