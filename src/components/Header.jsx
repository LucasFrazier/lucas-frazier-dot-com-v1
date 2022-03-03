import './Header.css'

export default function Header() {
  return (
    <header>
      <div class="logo">
          <img src="./images/devjane.png" alt="" />
      </div>
      <button class="nav-toggle" aria-label="toggle navigation">
          <span class="hamburger"></span>
      </button>
      <nav class="nav">
          <ul class="nav__list">
              <li class="nav__item"><a href="#home" class="nav__link">Home</a></li>
              <li class="nav__item"><a href="#services" class="nav__link">My Services</a></li>
              <li class="nav__item"><a href="#about" class="nav__link">About me</a></li>
              <li class="nav__item"><a href="#work" class="nav__link">My Work</a></li>
          </ul>
      </nav>
  </header>
  )
}
