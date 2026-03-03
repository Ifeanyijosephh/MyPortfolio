import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

  .project-section {
    font-family: 'Syne', sans-serif;
    padding: 0 40px;
    margin-top: -30px;
    margin-bottom: 60px;
    position: relative;
    overflow: hidden;
  }

  /* Ambient background blobs */
  .project-section::before {
    content: '';
    position: fixed;
    top: -200px;
    left: -200px;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    animation: drift1 12s ease-in-out infinite alternate;
  }

  .project-section::after {
    content: '';
    position: fixed;
    bottom: -200px;
    right: -100px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    animation: drift2 15s ease-in-out infinite alternate;
  }

  @keyframes drift1 {
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(80px, 60px) scale(1.15); }
  }

  @keyframes drift2 {
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(-60px, -80px) scale(1.1); }
  }

  .section-header {
    text-align: center;
    margin-bottom: 64px;
    position: relative;
    z-index: 1;
  }

  .section-eyebrow {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.3em;
    color: #22d3ee;
    text-transform: uppercase;
    margin-bottom: 12px;
    opacity: 0.7;
  }

  .section-title {
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800;
    color: #cffafe;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .section-title span {
    color: transparent;
    -webkit-text-stroke: 1px rgba(34, 211, 238, 0.5);
  }

  .section-divider {
    width: 48px;
    height: 2px;
    background: linear-gradient(90deg, #06b6d4, transparent);
    margin: 20px auto 0;
    border-radius: 2px;
  }

  /* Grid */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 28px;
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  /* Glass Card */
  .project-card {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    background: rgba(15, 23, 42, 0.55);
    backdrop-filter: blur(18px) saturate(160%);
    -webkit-backdrop-filter: blur(18px) saturate(160%);
    border: 1px solid rgba(34, 211, 238, 0.15);
    box-shadow:
      0 0 0 1px rgba(34, 211, 238, 0.04) inset,
      0 8px 32px rgba(0, 0, 0, 0.4),
      0 0 60px rgba(6, 182, 212, 0.04);
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1),
                box-shadow 0.4s cubic-bezier(0.23, 1, 0.32, 1),
                border-color 0.4s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
  }

  .project-card:hover {
    transform: translateY(-8px) scale(1.01);
    border-color: rgba(34, 211, 238, 0.35);
    box-shadow:
      0 0 0 1px rgba(34, 211, 238, 0.08) inset,
      0 20px 60px rgba(0, 0, 0, 0.5),
      0 0 80px rgba(6, 182, 212, 0.1),
      0 0 120px rgba(6, 182, 212, 0.05);
  }

  /* Shimmer line at top */
  .card-shimmer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(34,211,238,0.6), transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .project-card:hover .card-shimmer {
    opacity: 1;
  }

  /* Image wrapper */
  .card-image-wrapper {
    position: relative;
    overflow: hidden;
    height: 200px;
    flex-shrink: 0;
  }

  .card-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), filter 0.4s ease;
    filter: brightness(0.85) saturate(0.9);
  }

  .project-card:hover .card-image-wrapper img {
    transform: scale(1.06);
    filter: brightness(1) saturate(1.1);
  }

  /* Gradient overlay on image */
  .card-image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 40%,
      rgba(15, 23, 42, 0.75) 100%
    );
  }

  /* Tag badge on image */
  .card-tag {
    position: absolute;
    top: 12px;
    right: 12px;
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #22d3ee;
    background: rgba(6, 182, 212, 0.12);
    border: 1px solid rgba(34, 211, 238, 0.25);
    padding: 4px 10px;
    border-radius: 20px;
    backdrop-filter: blur(8px);
  }

  /* Card body */
  .card-body {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
  }

  .card-index {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: rgba(34, 211, 238, 0.4);
    letter-spacing: 0.1em;
  }

  .card-title {
    font-size: 1.15rem;
    font-weight: 700;
    color: #cffafe;
    letter-spacing: -0.01em;
    line-height: 1.25;
  }

  .card-desc {
    font-family: 'DM Mono', monospace;
    font-size: 12.5px;
    line-height: 1.65;
    color: rgba(103, 232, 249, 0.65);
    flex: 1;
  }

  /* Bottom bar */
  .card-footer {
    padding: 16px 24px;
    border-top: 1px solid rgba(34, 211, 238, 0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'DM Mono', monospace;
    font-size: 11.5px;
    font-weight: 500;
    letter-spacing: 0.08em;
    color: #22d3ee;
    text-decoration: none;
    text-transform: uppercase;
    transition: gap 0.3s ease, color 0.2s ease;
  }

  .card-link:hover {
    color: #67e8f9;
    gap: 14px;
  }

  .card-link svg {
    transition: transform 0.3s ease;
  }

  .card-link:hover svg {
    transform: translateX(3px);
  }

  .card-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgba(34, 211, 238, 0.3);
    border: 1px solid rgba(34, 211, 238, 0.5);
    animation: pulse-dot 2.4s ease-in-out infinite;
  }

  @keyframes pulse-dot {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.3); }
  }

  /* Scan line effect on hover */
  .card-scan {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(34,211,238,0.15), transparent);
    transform: translateY(-4px);
    transition: transform 1s ease;
    pointer-events: none;
  }

  .project-card:hover .card-scan {
    transform: translateY(430px);
  }
`;

function ProjectCard({ title, description, imageUrl, projectUrl, index, tag }) {
  const [ Hovered, setHovered] = useState(false);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card-shimmer" />
      <div className="card-scan" />

      <div className="card-image-wrapper">
        <img src={imageUrl} alt={title} />
        <div className="card-image-overlay" />
        {tag && <span className="card-tag">{tag}</span>}
      </div>

      <div className="card-body">
        <span className="card-index">
          {String(index + 1).padStart(2, "0")} —
        </span>
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
      </div>

      <div className="card-footer">
        <a
          href={projectUrl}
          className="card-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          View Project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <div className="card-dot" />
      </div>
    </div>
  );
}

function Project() {
  const projects = [
    // {
    //   title: "Project One",
    //   description: "A brief description of Project One. Built with modern tooling and a focus on performance.",
    //   imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    //   projectUrl: "https://example.com/project-one",
    //   tag: "Web App",
    // },
    // {
    //   title: "Project Two",
    //   description: "A brief description of Project Two. Focused on elegant UI and smooth interactions.",
    //   imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    //   projectUrl: "https://example.com/project-two",
    //   tag: "Dashboard",
    // },
    // {
    //   title: "Project Three",
    //   description: "A brief description of Project Three. Exploring new approaches to data visualization.",
    //   imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    //   projectUrl: "https://example.com/project-three",
    //   tag: "Design",
    // },
  ];

  return (
    <>
      <style>{styles}</style>
      <section className="project-section" id="projectSection">
        <div className="section-header">
           <h2 className="section-title">
            My <span>Projects</span>
          </h2>

          <div className="section-divider" />
        </div>

          <p className='text-cyan-400 text-center text-xl font-bold pb-6'> Projects coming soon! </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Project;