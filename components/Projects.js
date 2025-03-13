import "./Projects.css"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A fully responsive e-commerce platform built with Next.js and integrated with Stripe for payments.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "React", "Node.js", "Stripe"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A drag-and-drop task management application with user authentication and real-time updates.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Firebase", "CSS"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern portfolio website built with Next.js and CSS animations.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "CSS", "Framer Motion"],
      liveLink: "#",
      githubLink: "#",
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <div className="underline"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} className="btn" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

