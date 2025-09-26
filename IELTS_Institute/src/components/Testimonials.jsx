import React from "react";

export default function Testimonials() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">What Our Students Say</h2>
        <div className="row g-4">
          {/* Testimonial 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body text-center p-4">
                <div className="text-primary fs-1 mb-3">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="card-text mb-3">
                  Personalized coaching and realistic mocks helped me jump a full band. 
                  Absolutely worth it!
                </p>
                {/* Stars */}
                <div className="text-warning mb-3">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                {/* Profile */}
                <img
                  src="https://via.placeholder.com/60"
                  alt="student"
                  className="rounded-circle mb-2"
                />
                <h6 className="fw-bold mb-0">Sarah Johnson</h6>
                <small className="text-muted">Academic IELTS</small>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body text-center p-4">
                <div className="text-primary fs-1 mb-3">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="card-text mb-3">
                  The AI band predictor gave me the confidence to improve my weak areas 
                  before the real exam.
                </p>
                <div className="text-warning mb-3">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <img
                  src="https://via.placeholder.com/60"
                  alt="student"
                  className="rounded-circle mb-2"
                />
                <h6 className="fw-bold mb-0">Raj Patel</h6>
                <small className="text-muted">General Training</small>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <div className="card-body text-center p-4">
                <div className="text-primary fs-1 mb-3">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="card-text mb-3">
                  The speaking practice sessions were exactly like the real test. 
                  I felt totally prepared.
                </p>
                <div className="text-warning mb-3">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                </div>
                <img
                  src="https://via.placeholder.com/60"
                  alt="student"
                  className="rounded-circle mb-2"
                />
                <h6 className="fw-bold mb-0">Emily Davis</h6>
                <small className="text-muted">Speaking Practice</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
