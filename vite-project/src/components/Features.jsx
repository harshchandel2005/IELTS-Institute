import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Features() {
  const features = [
    {
      title: "Speaking Practice",
      description: "Interactive sessions with certified trainers plus AI-powered pronunciation analysis.",
      icon: "🎤",
      gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)"
    },
    {
      title: "Mock Tests", 
      description: "Exam-format practice tests with detailed performance analytics and improvement tips.",
      icon: "📝",
      gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)"
    },
    {
      title: "AI Band Score",
      description: "Advanced AI technology predicts your likely IELTS band score with 95% accuracy.",
      icon: "🤖", 
      gradient: "linear-gradient(135deg, #10b981, #059669)"
    },
    {
      title: "Personal Plan",
      description: "Customized study plans and one-on-one coaching tailored to your needs.",
      icon: "📚",
      gradient: "linear-gradient(135deg, #f59e0b, #ea580c)"
    }
  ];

  return (
    <section id="features" className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-4 fw-bold mb-3">Why Choose IELTS Excellence?</h2>
            <p className="fs-5 text-muted">
              Proven methods combined with modern technology for higher band scores.
            </p>
          </Col>
        </Row>
        
        <Row className="g-4 mb-5">
          {features.map((feature, index) => (
            <Col key={index} lg={3} md={6} className="mb-4">
              <Card 
                className="h-100 shadow-sm border-0 rounded-3"
                style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 1rem 3rem rgba(0,0,0,.175)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <Card.Body className="p-4 text-center">
                  <div 
                    className="rounded-3 d-flex align-items-center justify-content-center mx-auto mb-4"
                    style={{
                      width: '80px',
                      height: '80px',
                      background: feature.gradient,
                      fontSize: '2rem'
                    }}
                  >
                    {feature.icon}
                  </div>
                  <Card.Title className="h4 mb-3">{feature.title}</Card.Title>
                  <Card.Text className="text-muted mb-4">{feature.description}</Card.Text>
                  <Button variant="link" className="text-primary fw-semibold p-0">
                    Learn more →
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        {/* Stats Section */}
        <Row>
          <Col>
            <div 
              className="rounded-4 p-5 text-white text-center"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
            >
              <Row className="g-4">
                <Col md={3} xs={6}>
                  <h3 className="display-4 fw-bold mb-2">5000+</h3>
                  <p className="mb-0 opacity-75">Students Trained</p>
                </Col>
                <Col md={3} xs={6}>
                  <h3 className="display-4 fw-bold mb-2">98%</h3>
                  <p className="mb-0 opacity-75">Success Rate</p>
                </Col>
                <Col md={3} xs={6}>
                  <h3 className="display-4 fw-bold mb-2">15+</h3>
                  <p className="mb-0 opacity-75">Years Experience</p>
                </Col>
                <Col md={3} xs={6}>
                  <h3 className="display-4 fw-bold mb-2">8.5</h3>
                  <p className="mb-0 opacity-75">Average Band</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Features;
