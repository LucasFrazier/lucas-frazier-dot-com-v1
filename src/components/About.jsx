import './About.css'

export default function About() {
  return (
    <section class='about-me' id='about'>
        <h2 class='section__title section__title--about'>THE TRUTH</h2>
        <p class='section__subtitle section__subtitle--about'>Dev by Day. Musician by Night.</p>
        
        <div class='about-me__body'>
            <p>
              Whether I'm coding a new feature or experimenting with a new riff, my greatest strength is the ability to focus my creative energy to produce results.
            </p>
            <p>
              I am an artist, but I am also a doer. I have the vision, and I have the discipline to get it done.
            </p>
        </div>
        
        <img src='./images/about.jpg' alt='Lucas Frazier playing guitar and serenading his dog' class='about-me__img' />
    </section>
  )
}