import './Footer.css'

export default function Footer() {
  return (
    <footer class='footer'>
        <ul class='social-list'>
            <li class='social-list__item'>
                <a class='social-list__link' href='mailto:lucasfrazier1@gmail.com'>
                    <i class='fa fa-square-envelope'></i>
                </a>
            </li>
            <li class='social-list__item'>
                <a class='social-list__link' href='https://linkedin.com/in/lucasfrazier/'>
                    <i class='fab fa-linkedin'></i>
                </a>
            </li>
            <li class='social-list__item'>
                <a class='social-list__link' href='https://github.com/lucasfrazier'>
                    <i class='fab fa-github'></i>
                </a>
            </li>
        </ul>
    </footer>
  )
}