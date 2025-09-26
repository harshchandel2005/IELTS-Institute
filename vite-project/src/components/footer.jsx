import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Brand & About */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-white mb-3">
              <i className="fas fa-graduation-cap me-2 text-primary"></i>
              IELTS Excellence
            </h5>
            <p className="small">
              Trusted IELTS training with modern tools, expert mentors, and
              AI-driven insights to boost scores.
            </p>
            <div className="mt-3 d-flex gap-3 fs-5">
              <a href="#" className="text-light hover-primary">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-light hover-primary">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-light hover-primary">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-light hover-primary">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold text-white mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li><a href="#home" className="text-light text-decoration-none d-block mb-2">Home</a></li>
              <li><a href="#about" className="text-light text-decoration-none d-block mb-2">About</a></li>
              <li><a href="#courses" className="text-light text-decoration-none d-block mb-2">Courses</a></li>
              <li><a href="#practice" className="text-light text-decoration-none d-block mb-2">Practice</a></li>
              <li><a href="#reviews" className="text-light text-decoration-none d-block mb-2">Reviews</a></li>
              <li><a href="#contact" className="text-light text-decoration-none d-block">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold text-white mb-3">Contact</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <i className="fas fa-map-marker-alt text-primary me-2"></i>
                123 Education Street, Learning District
              </li>
              <li className="mb-2">
                <i className="fas fa-phone-alt text-primary me-2"></i>
                +1 (555) 123-4567
              </li>
              <li className="mb-2">
                <i className="fas fa-envelope text-primary me-2"></i>
                <a href="mailto:info@ieltsexcellence.com" className="text-light text-decoration-none">
                  info@ieltsexcellence.com
                </a>
              </li>
              <li>
                <i className="fas fa-clock text-primary me-2"></i>
                Mon–Fri: 9:00–18:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center border-top border-secondary pt-3 mt-3">
          <p className="small mb-2 mb-md-0">
            © 2025 IELTS Excellence. All rights reserved.
          </p>
          <div className="d-flex gap-3 small">
            <a href="#" className="text-light text-decoration-none">Privacy</a>
            <a href="#" className="text-light text-decoration-none">Terms</a>
            <a href="#" className="text-light text-decoration-none">Cookies</a>
            <a href="#" className="text-light text-decoration-none">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
