import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer id="footer" className={`footer ${isVisible ? "visible" : "hidden"}`}>
      <div className="footer-content">
        <div className="footer-links">
     
        </div>
        <p>© {new Date().getFullYear()} Rubie Graphics. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
