import { useEffect } from "react";
import "./home.css";

export const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    const elements = document.querySelectorAll(".hidden");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero hidden">
        <div className="hero-text">
          <h1>Welcome to Rubie Graphics</h1>
          <p>Where creativity meets passion for quality results.</p>
        </div>
        <div className="hero-image">
          <img src="/tephy.jpg" alt="Rubie Graphics" />
        </div>
      </section>

      {/* About Section */}
      <section className="about hidden">
        <h2>About Me</h2>
        <p>
          Hello, My name is <strong>Arries Rubie</strong>, a passionate Graphics
          Designer.
        </p>
        <p>
          <strong>Age:</strong> 18
        </p>
        <h3>Hobbies</h3>
        <ul className="hobbies">
          <li>Drawing</li>
          <li>Crocheting</li>
          <li>Crafting</li>
          <li>Calligraphy & Hand Lettering</li>
          <li>Lego/Model Building</li>
          <li>Fashion Styling</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="projects hidden">
        <h2>Projects Worked On</h2>
        <div className="projects-grid">
          <div className="project-card hidden">
            <h3>Joshua Juma</h3>
            <img src="/joshu.jpg" alt="Joshua Juma Project" />
          </div>

          <div className="project-card hidden">
            <h3>Delamere Kenya</h3>
            <img src="/delamere.jpg" alt="Yoghurt Branding" />
          </div>

          <div className="project-card hidden">
            <h3>Lera Curie</h3>
            <img src="/arr.jpg" alt="Lera Curie Project" />
          </div>

          <div className="project-card hidden">
            <h3>Joy Beauty Haven</h3>
            <img src="/haven.jpg" alt="Joy Beauty Haven Project" />
          </div>
        </div>
      </section>
    </div>
  );
};
