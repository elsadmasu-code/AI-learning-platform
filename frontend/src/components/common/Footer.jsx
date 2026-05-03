import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const styles = {
    footer: {
      background: "#2d3748",
      color: "white",
      padding: "60px 20px 30px",
      marginTop: "80px",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "40px",
      marginBottom: "40px",
    },
    section: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    link: {
      color: "#cbd5e0",
      textDecoration: "none",
      transition: "color 0.3s",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    divider: {
      height: "1px",
      background: "#4a5568",
      margin: "30px 0",
    },
    bottom: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "20px",
      fontSize: "14px",
      color: "#cbd5e0",
    },
    social: {
      display: "flex",
      gap: "15px",
    },
    socialIcon: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      background: "#4a5568",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "background 0.3s",
      fontSize: "20px",
      textDecoration: "none",
      color: "white",
    },
  };

  return (
    <footer style={styles.footer}>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
        .footer-link:hover {
          color: #667eea !important;
        }
        .social-icon:hover {
          background: #667eea !important;
          transform: translateY(-3px);
        }
      `}</style>

      <div style={styles.container}>
        <div style={styles.grid} className="footer-grid">
          <div style={styles.section}>
            <h3 style={styles.title}>🤖 AI Academy</h3>
            <p style={{ color: "#cbd5e0", lineHeight: "1.6" }}>
              Master skills with AI-powered learning. Join thousands of learners
              advancing their careers with our platform.
            </p>
            <div style={styles.social}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}
                className="social-icon"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}
                className="social-icon"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}
                className="social-icon"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}
                className="social-icon"
                aria-label="Instagram"
              >
                📷
              </a>
            </div>
          </div>

          <div style={styles.section}>
            <h3 style={styles.title}>Quick Links</h3>
            <Link to="/" style={styles.link} className="footer-link">
              Home
            </Link>
            <Link to="/courses" style={styles.link} className="footer-link">
              Courses
            </Link>
            <Link to="/dashboard" style={styles.link} className="footer-link">
              Dashboard
            </Link>
            <Link to="/profile" style={styles.link} className="footer-link">
              Profile
            </Link>
            <Link to="/admin" style={styles.link} className="footer-link">
              Admin
            </Link>
          </div>

          <div style={styles.section}>
            <h3 style={styles.title}>Resources</h3>
            <a href="#about" style={styles.link} className="footer-link">
              About Us
            </a>
            <a href="#blog" style={styles.link} className="footer-link">
              Blog
            </a>
            <a href="#help" style={styles.link} className="footer-link">
              Help Center
            </a>
            <a href="#terms" style={styles.link} className="footer-link">
              Terms of Service
            </a>
            <a href="#privacy" style={styles.link} className="footer-link">
              Privacy Policy
            </a>
          </div>

          <div style={styles.section}>
            <h3 style={styles.title}>Contact Developer</h3>
            <div style={{ color: "#cbd5e0", lineHeight: "1.8" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <span>👤</span>
                <span>Elsabet Admasu</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <span>✉️</span>
                <a
                  href="mailto:elsadmasu@gmail.com"
                  style={{ color: "#cbd5e0", textDecoration: "none" }}
                  className="footer-link"
                >
                  elsadmasu@gmail.com
                </a>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span>📞</span>
                <a
                  href="tel:+251932454889"
                  style={{ color: "#cbd5e0", textDecoration: "none" }}
                  className="footer-link"
                >
                  +251 932 454 889
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.divider}></div>

        <div style={styles.bottom} className="footer-bottom">
          <div>
            © {new Date().getFullYear()} AI Learning Platform. All rights
            reserved.
          </div>
          <div>
            Developed with ❤️ by <strong>Elsabet Admasu</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
