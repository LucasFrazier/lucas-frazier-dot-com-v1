import {useState, useEffect} from 'react'
import './Header.css'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const navLinkTitles = ['home', 'services', 'about', 'work']

  const toggleNav = () => {
    setNavOpen(prevNavOpen => !prevNavOpen)
  }

  const navLinkElements = navLinkTitles.map(navLinkTitle => (
    <li class='nav__item nav__link' onClick={toggleNav}>
      <a href={`#${navLinkTitle}`} class='nav__link'>{navLinkTitle}</a>
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
      <div class='logo'>
        LUCASFRAZIER.COM
      </div>
      <nav class='nav'>
        <ul class='nav__list'>
          {navLinkElements}
        </ul>
      </nav>
    </header>
  )
}
