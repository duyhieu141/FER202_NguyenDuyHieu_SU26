import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import MyModal from './MyModal';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;

function RegistrationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username không được để trống.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email không được để trống.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email không đúng định dạng.';
    }

    if (!formData.password) {
      newErrors.password = 'Password không được để trống.';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password cần ít nhất 6 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt.';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Vui lòng xác nhận password.';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Confirm password phải trùng khớp.';
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setShowModal(true);
  };

  const handleCancel = () => {
    setFormData({ username: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/posts');
  };

  return (
    <Container className='py-5'>
      <Row className='justify-content-center'>
        <Col lg={6}>
          <Card className='shadow-sm'>
            <Card.Header className='bg-primary text-white'>
              <h4 className='mb-0'>Đăng ký tài khoản</h4>
            </Card.Header>
            <Card.Body>
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId='username'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type='text'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                    placeholder='Nhập username'
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3' controlId='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    placeholder='Nhập email'
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3' controlId='password'>
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                      placeholder='Nhập password'
                    />
                    <Button
                      variant='outline-secondary'
                      onClick={() => setShowPassword(prev => !prev)}
                      tabIndex={-1}
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </Button>
                  </InputGroup>
                  <Form.Control.Feedback type='invalid'>
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-4' controlId='confirmPassword'>
                  <Form.Label>Confirm Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type={showConfirmPassword ? 'text' : 'password'}
                      name='confirmPassword'
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      isInvalid={!!errors.confirmPassword}
                      placeholder='Nhập lại password'
                    />
                    <Button
                      variant='outline-secondary'
                      onClick={() => setShowConfirmPassword(prev => !prev)}
                      tabIndex={-1}
                    >
                      {showConfirmPassword ? '🙈' : '👁️'}
                    </Button>
                  </InputGroup>
                  <Form.Control.Feedback type='invalid'>
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className='d-flex justify-content-between'>
                  <Button variant='secondary' onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button variant='primary' type='submit'>
                    Register
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <MyModal
        show={showModal}
        onHide={handleModalClose}
        title='Đăng ký thành công'
        body='Chúc mừng bạn đã đăng ký thành công. Bạn sẽ được chuyển đến trang blog post.'
      />
    </Container>
  );
}

export default RegistrationForm;
