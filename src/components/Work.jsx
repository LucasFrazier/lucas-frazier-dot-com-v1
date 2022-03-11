import './Work.css'

export default function Work() {
  return (
    <section class='my-work' id='work'>
        <h2 class='section__title section__title--work'>THE PROOF</h2>
        <p class='section__subtitle section__subtitle--work'>Professional and personal examples</p>
        <div class='portfolio'>
            <a href='portfolio-item.html' class='portfolio__item'>
              <img src='./images/portfolio-01.jpg' alt='' class='portfolio__img' />
            </a>
            <a href='portfolio-item.html' class='portfolio__item'>
              <img src='./images/portfolio-02.jpg' alt='' class='portfolio__img' />
            </a>
            <a href='portfolio-item.html' class='portfolio__item'>
              <img src='./images/portfolio-03.jpg' alt='' class='portfolio__img' />
            </a>
            <a href='portfolio-item.html' class='portfolio__item'>
              <img src='./images/portfolio-04.jpg' alt='' class='portfolio__img' />
            </a>
        </div>
    </section>
  )
}