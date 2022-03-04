import {useState, useEffect} from 'react'
import './Header.css'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(prevNavOpen => !prevNavOpen)
  }

  useEffect(() => {
    const bodyClassList = document.body.classList

    navOpen ? bodyClassList.add('nav-open') : bodyClassList.remove('nav-open')
  }, [navOpen])

  return (
    <header>
      <div class='logo'>
        <img src='./images/devjane.png' alt='' />
      </div>
      <button
        class='nav-toggle'
        aria-label='toggle navigation'
        onClick={toggleNav}
      >
        <span class='hamburger'></span>
      </button>
      <nav class='nav'>
        <ul class='nav__list'>
          <li class='nav__item nav__link' onClick={toggleNav}>
            <a href='#home' class='nav__link'>Home</a>
          </li>
          <li class='nav__item nav__link' onClick={toggleNav}>
            <a href='#services' class='nav__link'>My Services</a>
          </li>
          <li class='nav__item nav__link' onClick={toggleNav}>
            <a href='#about' class='nav__link'>About me</a>
          </li>
          <li class='nav__item nav__link' onClick={toggleNav}>
            <a href='#work' class='nav__link'>My Work</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
