import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar 
      bg="white" 
      expand="lg" 
      fixed="top" 
      className="shadow-sm"
      style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255,255,255,0.95)' }}
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <div 
            className="me-2 d-flex align-items-center justify-content-center text-white fw-bold rounded"
            style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              fontSize: '1.1rem'
            }}
          >
            IE
          </div>
          <span className="fs-4 fw-bold text-dark">IELTS Excellence</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className="fw-semibold mx-2">Home</Nav.Link>
            <Nav.Link href="#features" className="fw-semibold mx-2">Courses</Nav.Link>
            <Nav.Link href="#practice" className="fw-semibold mx-2">Practice</Nav.Link>
            <Nav.Link href="#testimonials" className="fw-semibold mx-2">Reviews</Nav.Link>
            <Nav.Link href="#about" className="fw-semibold mx-2">About</Nav.Link>
            <Button 
              variant="primary" 
              href="#contact"
              className="ms-3 rounded-3 px-4"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #1e40af)' }}
            >
              Contact
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavigationBar;
