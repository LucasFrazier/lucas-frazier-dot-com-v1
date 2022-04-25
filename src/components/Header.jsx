import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const navLinkTitles = ['home', 'meme-maker', 'notes-app', 'dice-game', 'shop']

  const toggleNav = () => {
    setNavOpen(prevNavOpen => !prevNavOpen)
  }

  const navLinkElements = navLinkTitles.map(navLinkTitle => (
    <li class='nav__item nav__link' onClick={toggleNav}>
      <Link 
        to={`/${navLinkTitle}`} 
        class='nav__link'
      >
        {navLinkTitle.replace('-', ' ')}
      </Link>
    </li>
  ))

  useEffect(() => {
    const bodyClassList = document.body.classList

    navOpen ? bodyClassList.add('nav-open') : bodyClassList.remove('nav-open')
  }, [navOpen])

  useEffect(() => {
    const watchWidth = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', watchWidth)

    windowWidth >= 1024 && (
      navOpen && setNavOpen(prevNavOpen => !prevNavOpen)
    )

    return () => window.removeEventListener('resize', watchWidth)
  }, [windowWidth, navOpen])

  return (
    <header>
      <button
        class='nav-toggle'
        aria-label='toggle navigation'
        onClick={toggleNav}
      >
        <span class='hamburger'></span>
      </button>
      <a href='/' class='logo'>
        LUCASFRAZIER.COM
      </a>
      <nav class='nav'>
        <ul class='nav__list'>
          {navLinkElements}
          <li class='social-list__item'>
            <a class='social-list__link' href='mailto:lucasfrazier1@gmail.com'>
              <i class='fa fa-square-envelope'></i>
            </a>
            <a class='social-list__link' href='https://linkedin.com/in/lucasfrazier/'>
              <i class='fab fa-linkedin'></i>
            </a>
            <a class='social-list__link' href='https://github.com/lucasfrazier'>
              <i class='fab fa-github'></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
