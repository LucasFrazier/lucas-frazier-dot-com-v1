import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const navLinkTitles = ['home', 'meme-generator', 'notes', 'tenzies']

  const toggleNav = () => {
    setNavOpen(prevNavOpen => !prevNavOpen)
  }

  const navLinkElements = navLinkTitles.map(navLinkTitle => (
    <li class='nav__item nav__link' onClick={toggleNav}>
      <Link to={`/${navLinkTitle}`} class='nav__link'>{navLinkTitle}</Link>
    </li>
  ))


  useEffect(() => {
    const bodyClassList = document.body.classList

    navOpen ? bodyClassList.add('nav-open') : bodyClassList.remove('nav-open')
  }, [navOpen])

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
        </ul>
      </nav>
    </header>
  )
}
