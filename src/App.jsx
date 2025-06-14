import { useState, useEffect } from 'react'
import './App.css'
import Profile from './components/profile/Profile'
import About from './components/about/About'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/Portfolio'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'

function App() {
  const [component, setComponent] = useState('About');

  useEffect(() => {
    let links = document.getElementsByClassName('links');
    for(let i = 0; i < links.length; i++) {
      links[i].style.color = 'white';
    }
    document.getElementById(`${component}_text`).style.color = 'orange';
  }, [component])

  function showComponent(value) {
    document.getElementById(component).style.display = 'none';
    document.getElementById(value).style.display = 'block';
    // document.getElementById(`${value}_text`).style.color = 'orange';
    setComponent(value);
  }
  return (
    <main>
      <Profile />
      <section className='sec2'>
        <div className='head'>
          <div className='address'>
            <h2 className='address_text'>{component == 'About' ? 'About me' : component}</h2>
          </div>
          <div className='navbar'>
            <p className='links' id='About_text' onClick={() => showComponent('About')}>About</p>
            <p className='links' id='Resume_text' onClick={() => showComponent('Resume')}>Resume</p>
            <p className='links' id='Portfolio_text' onClick={() => showComponent('Portfolio')}>Portfolio</p>
            <p className='links' id='Blog_text' onClick={() => showComponent('Blog')}>Blog</p>
            <p className='links' id='Contact_text' onClick={() => showComponent('Contact')}>Contact</p>
          </div>
        </div>
        <About />
        <Resume />
        <Portfolio />
        <Blog />
        <Contact />
      </section>
    </main >
  )
}

export default App
