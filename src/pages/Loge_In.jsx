import React from 'react'
import './Loge_in.css';
import { Button, Form, Container } from 'react-bootstrap';
import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loge_In = () => {
  return (
    <div className="spotify-login-bg">
      <Container className="login-container text-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
          alt="Spotify Logo"
          className="spotify-logo"
        />
        <h2 className="login-title">Log in to Spotify</h2>

        <div className="social-buttons">
          <Button variant="dark" className="social-btn">
            <FaGoogle className="icon" /> Continue with Google
          </Button>
          <Button variant="dark" className="social-btn">
            <FaFacebookF className="icon facebook" /> Continue with Facebook
          </Button>
          <Button variant="dark" className="social-btn">
            <FaApple className="icon white-icon" /> Continue with Apple
          </Button>
          <Button variant="dark" className="social-btn">
            Continue with phone number
          </Button>
        </div>

        <hr/>

        <Form>
          <Form.Group controlId="formBasicEmail" className="text-start">
            <Form.Label>Email or username</Form.Label>
            <Form.Control type="text" placeholder="Email or username" />
          </Form.Group>

          <Button className="continue-btn" type="submit">
            Continue
          </Button>
        </Form>

        <p className="signup-text">
          Don’t have an account? <a href="#">Sign up for Spotify</a>
        </p>
      </Container>
    </div>
  );
};
export default Loge_In;
