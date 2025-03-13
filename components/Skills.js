import "./Skills.css"

export default function Skills() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "Git", level: 80 },
    { name: "Responsive Design", level: 90 },
    { name: "Business Analyst", level: 85 },
    { name: "Quality Analyst(Automation)", level: 75},
    { name: "Digital Marketing(Boosting)", level: 80},
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>My Skills</h2>
          <div className="underline"></div>
        </div>

        <div className="skills-container">
          <div className="skills-text">
            <h3>Technical Proficiency</h3>
            <p>
              With a strong foundation in frontend development, I specialize in creating responsive and interactive web
              applications. My expertise includes:
            </p>
            <ul>
              <li>Building modern UIs with React and Next.js</li>
              <li>Creating responsive layouts with CSS and CSS frameworks</li>
              <li>Implementing RESTful APIs and state management</li>
              <li>Version control with Git and collaborative development</li>
              <li>Performance optimization and accessibility</li>
              <li>Skilled in gathering requirements, analyzing business processes, and optimizing ERP, eCommerce, and mobile app solutions.</li>
              <li>Experienced in manual and automated testing, ensuring software quality, performance, and compliance with requirements.</li>
              <li>Proficient in SEO, PPC, social media strategies, and analytics to drive traffic, engagement, and conversions.</li>
            </ul>
          </div>

          <div className="skills-bars">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

