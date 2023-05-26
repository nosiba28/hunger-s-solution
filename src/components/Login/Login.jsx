import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset();
                navigate(from, { replace: true });

            })
            .catch(error => console.log(error))

    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))

    }
    const handleSignInWithGithub = () => {
        signInWithGitHub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }
    return (
        <Container className='w-50 mx-auto p-4 border border-info my-4 rounded rounded-10'>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <div className='text-center'>
                    <Button className='w-100' variant="primary" type="submit">
                        Login
                    </Button>
                </div>


                <div className='text-center p-3'>
                    <Button onClick={handleSignInWithGoogle} className='mb-2 w-100' variant="outline-primary"><FaGoogle></FaGoogle>Login with Google</Button>
                    <Button onClick={handleSignInWithGithub} className='mb-2 w-100' variant="outline-secondary"><FaGithub />Login with Github</Button>
                </div>
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </Form>
        </Container>
    );
};

export default Login;