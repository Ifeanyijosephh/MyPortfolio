import { useState, useEffect } from 'react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = (e) => {
    e.stopPropagation()
    setIsOpen((prev) => !prev)
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
    <header className="flex w-full justify-between items-center px-6 py-[11px] bg-[#020617cf] backdrop-blur-sm fixed top-0 left-0 z-[200] box-border overflow-visible">
      <img src="images/mainlogo.png" className="w-[clamp(80px,2vw,120px)] h-[clamp(44px,2vh,60px)] self-center pt-4" alt="Ifeco logo" />
      <NavBar isOpen={isOpen} onNavigate={() => setIsOpen(false)} />
      <button
        type="button"
        onClick={toggleMenu}
        id="hamburger"
        aria-expanded={isOpen}
        aria-controls="navLinks"
        aria-label="Toggle navigation menu"
        className="flex flex-col gap-[2px] self-center cursor-pointer z-50 rounded-[5px] md:hidden"
      >
        <span className={`w-[15px] h-[2px] bg-cyan-400 rounded-[3px] transition-transform duration-300 ${isOpen ? 'translate-y-[3px] rotate-45' : ''}`}></span>
        <span className={`w-[15px] h-[2px] bg-cyan-400 rounded-[3px] transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`w-[15px] h-[2px] bg-cyan-400 rounded-[3px] transition-transform duration-300 ${isOpen ? '-translate-y-[5px] -rotate-45' : ''}`}></span>
      </button>
    </header>
  )
}

function NavBar({ isOpen, onNavigate }) {
  return (
    <nav
      id="navLinks"
      className={`
        flex flex-col gap-10 fixed top-0 left-0 w-screen
        h-[clamp(300px,80vh,400px)] px-8 py-4
        bg-[#020617] transition-transform duration-300 ease-in-out z-50
        md:static md:flex-row md:w-auto md:h-auto md:bg-transparent
        md:gap-4 md:items-center md:translate-y-0 md:z-auto md:p-0 md:pt-4
          ${isOpen ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <a href="#heroSection" id="menuWord" onClick={onNavigate} className="md:hidden">
        <img src="images/mainlogo.png" className="w-[clamp(80px,2vw,100px)] h-[clamp(26px,2vh,44px)]" alt="Ifeanyi logo" />
      </a>
      <a href="#heroSection" onClick={onNavigate} aria-label="Hero Section Button"
        className="text-white font-bold no-underline transition-transform duration-200 hover:scale-105 focus:scale-105 md:text-sm hover:text-cyan-400">
        Home
      </a>
      <a href="#aboutSection" onClick={onNavigate} aria-label="About Section Button"
        className="text-white font-bold no-underline transition-transform duration-200 hover:scale-105 focus:scale-105 md:text-sm hover:text-cyan-400">
        About Me
      </a>
      <a href="#skillSection" onClick={onNavigate} aria-label="Skill Section Button"
        className="text-white font-bold no-underline transition-transform duration-200 hover:scale-105 focus:scale-105 md:text-sm hover:text-cyan-400">
        Skills
      </a>
      <a href="#projectSection" onClick={onNavigate} aria-label="Project Section Button"
        className="text-white font-bold no-underline transition-transform duration-200 hover:scale-105 focus:scale-105 md:text-sm hover:text-cyan-400">
        Projects
      </a>
      <a href="#contactSection" onClick={onNavigate} aria-label="Contact Section Button"
        className="text-white font-bold no-underline transition-transform duration-200 hover:scale-105 focus:scale-105
        md:bg-[rgb(65,65,255)] md:px-4 md:py-2 md:rounded-[0.7rem] md:hover:scale-110 md:active:-translate-y-1">
        Contact Me
      </a>
    </nav>
  )
}

export default Header