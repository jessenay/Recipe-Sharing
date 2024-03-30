import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import AuthService from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';
import loginPicture from '../assets/Pictures/login-picture.png';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loginUser] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
      try {
        const { data } = await loginUser({
          variables: { ...userFormData },
        });

        AuthService.login(data.login.token);
        setUserFormData({ email: '', password: '' });
        setShowAlert(false);

        // Redirect to the home page after successful login
        window.location.href = '/home'; // Update the URL programmatically
      } catch (err) {
        console.error(err);
        setShowAlert(true);
      }
    }

    setValidated(true);
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Login</h2>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit} className='login-text'>
          <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            Something went wrong with your login credentials!
          </Alert>

          <Form.Group className='mb-3'>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Your email'
              name='email'
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label htmlFor='password'>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Your password'
              name='password'
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
          </Form.Group>

          <Button
            disabled={!(userFormData.email && userFormData.password)}
            type='submit'
            variant='success'>
            Submit
          </Button>
        </Form>
        <div className="signup-section">
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </div>
      <div className="right-section">
        <div className='top-section'>
          <img src={loginPicture} alt="Descriptive Alt Text" className="login-picture" />
        </div>
        <div className="logo-section">
          <span>FeastFolio</span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
