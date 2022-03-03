import './Hero.css'

export default function Hero() {
  return (
    <section class="intro" id="home">
        <h1 class="section__title section__title--intro">
            Hi, I am <strong>Jane Smith</strong>
        </h1>
        <p class="section__subtitle section__subtitle--intro">front-end dev</p>
        <img src="./images/dev-jane-01.jpg" alt="Jane Smith smiling" class="intro__img" />
    </section>
  )
}