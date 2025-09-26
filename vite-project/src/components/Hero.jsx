import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';

function Hero() {
  return (
    <section 
      id="home" 
      className="py-5"
      style={{ 
        background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #e0f2fe 100%)',
        minHeight: '100vh',
        paddingTop: '120px'
      }}
    >
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="text-center text-lg-start">
              <h1 className="display-3 fw-bold mb-4 mt-5">
                Master IELTS with
                <span 
                  className="d-block"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Expert Coaching + AI
                </span>
              </h1>
              
              <p className="fs-5 text-muted mb-4 lead">
                Comprehensive preparation for Listening, Reading, Writing, and Speaking 
                with analytics, mock tests, and real examiner-style feedback.
              </p>
              
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start mb-4 flex-wrap">
                <Button 
                  size="lg" 
                  className="rounded-3 px-4 py-3"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #1e40af)' }}
                  href="#features"
                >
                  Start Free Trial
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg" 
                  className="rounded-3 px-4 py-3"
                  href="#practice"
                >
                  Try Mock Test
                </Button>
              </div>
              
              <div className="d-flex gap-4 justify-content-center justify-content-lg-start text-muted">
                <div className="d-flex align-items-center">
                  <Badge bg="success" className="rounded-circle me-2" style={{width: '12px', height: '12px'}}></Badge>
                  98% success rate
                </div>
                <div className="d-flex align-items-center">
                  <Badge bg="success" className="rounded-circle me-2" style={{width: '12px', height: '12px'}}></Badge>
                  Certified trainers
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <div className="text-center position-relative">
              <div 
                className="bg-white rounded-4 shadow-lg p-4 position-relative"
                style={{ 
                  transform: 'rotate(3deg)',
                  transition: 'transform 0.3s ease',
                  maxWidth: '400px',
                  margin: '0 auto'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'rotate(0deg) scale(1.02)'}
                onMouseLeave={(e) => e.target.style.transform = 'rotate(3deg)'}
              >
                <div 
                  className="text-white rounded-3 p-5 text-center position-relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)',
                    minHeight: '300px'
                  }}
                >
                  <div 
                    className="bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: '80px', height: '80px' }}
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22,4 12,14.01 9,11.01"/>
                    </svg>
                  </div>
                  <h3 className="h2 mb-3">IELTS Success</h3>
                  <p className="opacity-75">Your gateway to global opportunities</p>
                </div>
              </div>
              
              {/* Floating Badges */}
              <Badge 
                className="position-absolute top-0 end-0 translate-middle px-3 py-2 fs-6 fw-bold"
                style={{ 
                  background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                  color: '#92400e',
                  animation: 'float 6s ease-in-out infinite'
                }}
              >
                Band 9.0
              </Badge>
              
              <Badge 
                bg="success"
                className="position-absolute bottom-0 start-0 translate-middle px-3 py-2 fs-6 fw-bold"
                style={{ animation: 'float 6s ease-in-out infinite 3s' }}
              >
                Guaranteed Results
              </Badge>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
