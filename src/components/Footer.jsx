import './Footer.css'

export default function Footer() {
  return (
    <footer class="footer">
        <a href="mailto:lucasfrazier1@gmail.com" class="footer__link">contact@lucasfrazier.com</a>
        <ul class="social-list">
            <li class="social-list__item">
                <a class="social-list__link" href="https://linkedin.com/in/lucasfrazier/">
                    <i class="fab fa-linkedin"></i>
                </a>
            </li>
            <li class="social-list__item">
                <a class="social-list__link" href="https://github.com/lucasfrazier">
                    <i class="fab fa-github"></i>
                </a>
            </li>
        </ul>
    </footer>
  )
}