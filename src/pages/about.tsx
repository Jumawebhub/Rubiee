import './about.css';

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Me</h1>
        <p className="about-subtitle">Visual Storyteller & Brand Designer</p>
        
        <div className="about-image">
          <img 
            src="tephy.jpg" 
            alt="Profile" 
            className="profile-img" 
          />
        </div>

        <div className="about-text">
          <p>
            Hi, I’m <strong>Arries Rubie</strong>, a graphic designer with a passion for creating bold, memorable visuals that tell stories and elevate brands.
          </p>
          <p>
            With <strong>3+ years</strong> of experience, I specialize in <strong>brand identity</strong>, <strong>print design</strong>, and <strong>digital illustrations</strong>. My work blends minimalism with vibrant energy to deliver designs that stand out.
          </p>
          <p>
            I believe design is more than aesthetics—it’s about solving problems and connecting with audiences emotionally.
          </p>
        </div>

        <div className="skills-section">
          <h2>My Toolkit</h2>
          <div className="skills-list">
            <div className="skill-item">Adobe Creative Suite</div>
            <div className="skill-item">Brand Identity</div>
            <div className="skill-item">Typography</div>
            <div className="skill-item">Illustration</div>
            <div className="skill-item">Print Design</div>
            <div className="skill-item">UI/UX Basics</div>
          </div>
        </div>

        <div className="design-philosophy">
          <h2>Design Philosophy</h2>
          <p>
            <em>"Less but better"</em> — I focus on simplicity, functionality, and emotional impact. Every color, shape, and font choice is intentional.
          </p>
        </div>
      </div>
    </div>
  );
};