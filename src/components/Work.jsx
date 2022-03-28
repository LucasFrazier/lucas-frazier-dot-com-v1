import './Work.css'

export default function Work() {
  return (
    <section class='my-work' id='work'>
        <h2 class='section__title section__title--work'>THE PROOF</h2>
        <p class='section__subtitle section__subtitle--work'>Professional and Personal Portfolio</p>
        <div class='portfolio'>
            <a href='https://www.eachandevery.com' class='portfolio__item'>
              <img src='./images/portfolio-01.png' alt='' class='portfolio__img' />
            </a>
            <a href='/dice-game' class='portfolio__item'>
              <img src='./images/portfolio-02.png' alt='' class='portfolio__img' />
            </a>
            <a href='https://www.shopgemz.com' class='portfolio__item'>
              <img src='./images/portfolio-03.png' alt='' class='portfolio__img' />
            </a>
            <a href='/notes-app' class='portfolio__item'>
              <img src='./images/portfolio-04.png' alt='' class='portfolio__img' />
            </a>
            <a href='https://www.keepitanchored.com' class='portfolio__item'>
              <img src='./images/portfolio-05.png' alt='' class='portfolio__img' />
            </a>
            <a href='/meme-maker' class='portfolio__item'>
              <img src='./images/portfolio-06.png' alt='' class='portfolio__img' />
            </a>
        </div>
    </section>
  )
}