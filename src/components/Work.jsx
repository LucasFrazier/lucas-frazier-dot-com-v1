import './Work.css'

export default function Work() {
  return (
    <section class="my-work" id="work">
        <h2 class="section__title section__title--work">My work</h2>
        <p class="section__subtitle section__subtitle--work">A selection of my range of work</p>
        
        <div class="portfolio">
            <a href="portfolio-item.html" class="portfolio__item">
                <img src="./images/portfolio-01.jpg" alt="" class="portfolio__img" />
            </a>
            
            <a href="portfolio-item.html" class="portfolio__item">
                <img src="./images/portfolio-02.jpg" alt="" class="portfolio__img" />
            </a>
            
            <a href="portfolio-item.html" class="portfolio__item">
                <img src="./images/portfolio-03.jpg" alt="" class="portfolio__img" />
            </a>
            

            <a href="portfolio-item.html" class="portfolio__item">
                <img src="./images/portfolio-04.jpg" alt="" class="portfolio__img" />
            </a>
            
            <a href="portfolio-item.html" class="portfolio__item">
                <img src="./images/portfolio-05.jpg" alt="" class="portfolio__img" />
            </a>
            
            <a href="portfolio-item.html" class="portfolio__item">
                <img src="./images/portfolio-06.jpg" alt="" class="portfolio__img" />
            </a>
            
            <a href="portfolio-item.html" class="portfolio__item">
                <img src="./images/portfolio-07.jpg" alt="" class="portfolio__img" />
            </a>
            
            <a href="#" class="portfolio__item">
                <img src="./images/portfolio-08.jpg" alt="" class="portfolio__img" />
            </a>
            
            <a href="#" class="portfolio__item">
                <img src="./images/portfolio-09.jpg" alt="" class="portfolio__img" />
            </a>
            
            <a href="#" class="portfolio__item">
                <img src="./images/portfolio-10.jpg" alt="" class="portfolio__img" />
            </a>
        </div>
    </section>
  )
}