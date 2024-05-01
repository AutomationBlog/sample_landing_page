import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import Header from './components/header/header.jsx'
import Hero from './components/herosection/herosection.jsx'
import Features from './components/features/features.jsx'
import Showcase from './components/showcase/showcase.jsx'
import Testimonials from './components/testimonials/testimonials.jsx'
import CallToAction from './components/call_to_action/call-to-action.jsx'
import Footer from './components/footer/footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Features />
    <Showcase />
    <Testimonials />
    <CallToAction />
    <Footer />
  </React.StrictMode>,
)
