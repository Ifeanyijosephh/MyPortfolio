import { useState, useEffect } from 'react'

function NavBar() {



  return (
    <nav className={isOpen ? "navLinks active" : "navLinks"} id="navLinks">
      <a href="" disabled className="navLink" id="menuWord"> 
        <img src='images/mainlogo.png' className="myLogo" id='myLogo' alt='myLogo'/>
      </a>
      <a href="#heroSection" className="navLink" aria-label="Hero Section Button">Home</a>
      <a href="#aboutSection" className="navLink" aria-label="About Section Button">About Me</a>
      <a href="#skillSection" className="navLink" aria-label="skillSection Section Button"> Skills </a>
      <a href="#projectSection" className="navLink" aria-label="Project Section Button"> Projects </a>
      <a href="#contactSection" className="navLink" aria-label="Contact Section Button" id="contactNavBtn"> Contact Me </a>
    </nav>
  )
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = (e) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const closeMenu = () => setIsOpen(false)
    
    if (isOpen) {
      document.body.addEventListener('click', closeMenu)
    }
    
    return () => {
      document.body.removeEventListener('click', closeMenu)
    }
  }, [isOpen])
  return (
    <header className="headerSection">
      <img src="images/mainlogo.png" className="myLogo" id='myLogo' alt='myLogo'/>
      <NavBar isOpen={isOpen}/>
      <div className={ isOpen ? 'hamburger active' : 'hamburger'} onClick={toggleMenu} id='hamburger'>

        <span className="bar"></span>
        <span className='bar'></span>
        <span className='bar'></span>

      </div>
    </header>
  )
}

export default Header