import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Steps from './components/Steps'
import Financial from './components/Financial'
import Sports from './components/Sports'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Steps />
        <Financial />
        <Sports />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
