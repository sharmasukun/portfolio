import "./About.css"

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src="/placeholder.svg?height=400&width=400" alt="About Me" />
          </div>
          <div className="about-text">
            <h3>Who am I?</h3>
            <p>
              I'm a passionate Frontend Developer with a strong foundation in building modern web applications. With
              expertise in JavaScript, React, and Next.js, I create responsive and user-friendly interfaces.
            </p>
            <p>
              My journey in web development started 3 years ago, and since then, I've worked on various projects ranging
              from e-commerce platforms to content management systems.
            </p>
            <p>
              When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new technologies.
            </p>
            <div className="about-details">
              <div className="detail">
                <strong>Name:</strong> Sukun Sharma
              </div>
              <div className="detail">
                <strong>Email:</strong> sukun.13cs079@gmail.com
              </div>
              <div className="detail">
                <strong>Location:</strong> Butwal, Nepal
              </div>
              <div className="detail">
                <strong>Availability:</strong> Open to opportunities
              </div>
            </div>
            <a href="/resume.pdf" className="btn" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

