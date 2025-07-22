import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sing_up.css';

const Sign_Up = () => {
  return (
    <div className='signuo-main'>

      <div className="signup-bg">
        <Container className="signup-container d-flex flex-column align-items-center justify-content-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
            alt="Spotify Logo"
            className="spotify-logo"
          />
          <h2 className="signup-heading">Sign up to</h2>
          <h2 className="signup-heading">start listening</h2>

          <Form className="w-100 mt-3">
            <Form.Group controlId="formEmail">
              <Form.Label className="text-white">Email address</Form.Label>
              <Form.Control type="email" placeholder="name@domain.com" className="custom-input" />
            </Form.Group>

            <a href="#" className="phone-link">Use phone number instead.</a>

            <Button className="next-btn w-100 mt-3" type="submit">Next</Button>
          </Form>

          <div className="separator">
            <hr />
            <span>or</span>
            <hr />
          </div>
            
          <Button variant="outline-light" className="social-btn w-100 mt-2">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" /> Sign up with Google
          </Button>
          <Button variant="outline-light" className="social-btn w-100 mt-2">
            <img src="https://img.icons8.com/ios-filled/20/ffffff/mac-os.png" alt="Apple" /> Sign up with Apple
          </Button>

          <p className="login-link mt-4">
            Already have an account? <a href="#">Log in here.</a>
          </p>
        </Container>
      </div>
    </div>
  )
}

export default Sign_Up
