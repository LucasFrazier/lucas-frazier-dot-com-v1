import './Services.css'

export default function Services() {
  return (
    <section class='my-services' id='services'>
      <h2 class='section__title section__title--services'>THE SKILLS</h2>
      <div class='services'>
        <div class='service'>
          <h3>Web Development</h3>
          <p>HTML. CSS. Javascript. These are the building blocks of the web and of my career.</p>
        </div>
        <div class='service'>
          <h3>Agile</h3>
          <p>A user-centered approach to project management. Research. Testing. Data/Analytics</p>
        </div>
        <div class='service'>
          <h3>UX/UI</h3>
          <p>Accessibility. Usability. Test test test. You are not the user, and neither am I.</p>
        </div>
      </div>
    </section>
  )
}
