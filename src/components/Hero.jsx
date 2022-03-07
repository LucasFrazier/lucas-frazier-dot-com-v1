import './Hero.css'

export default function Hero() {
  return (
    <section class="intro" id="home">
        <h1 class="section__title section__title--intro">
            Hi, I am <strong>Jane Smith</strong>
        </h1>
        <img src="./images/headshot512.png" alt="Lucas Frazier smiling" class="hero__img" />
    </section>
  )
}