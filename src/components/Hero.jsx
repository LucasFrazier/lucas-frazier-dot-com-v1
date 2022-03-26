import './Hero.css';

export default function Hero() {
  return (
    <section class="hero" id="home">
      <h1 class="section__title section__title--hero">
        <strong>
          THE MAN.
          <br />
          THE MYTH.
          <br />
          THE MUSTACHE.
        </strong>
      </h1>
      <p class="section__subtitle section__subtitle--hero">Front-End Web Dev &amp; Beyond</p>
      <img src="./images/headshot512.png" alt="Lucas Frazier smiling" class="hero__img" />
    </section>
  );
}
