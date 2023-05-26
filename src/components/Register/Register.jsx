import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { user, createUser, profileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('')
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        if (name.length === 0) {
            setError('Please fill the name filled');
            return;
        }
        if (password.length === 0) {
            setError('Please fill the password filled');
            return;
        }
        if (password.length < 6) {
            setError('The password is at least six characters!');
            return;
        }


        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                profileUpdate(name, photo)
                    .then(() => {
                        form.reset();
                        navigate('/')
                    })
                    .catch(error => console.log(error));
                console.log(loggedUser);
                setError('');

            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleAccepted = e => {
        setAccepted(e.target.checked)
    }
    return (
        <div>
            <Container className='w-50 mx-auto p-4 border border-info my-4 rounded rounded-10'>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Photo url</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo url" />
                    </Form.Group>
                    <Form.Group onClick={handleAccepted} className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label={<>Accept <Link to="/terms">Terms and Conditions</Link></>} />
                    </Form.Group>
                    <Button className='w-100 my-2' variant="primary" type="submit">
                        Register
                    </Button>
                    {error && <p className='text-danger'>{error}</p>}
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </Form>
            </Container>
        </div>
    );
};

export default Register;