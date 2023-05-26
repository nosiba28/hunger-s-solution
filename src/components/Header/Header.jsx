import React, { useContext, useRef, useState } from 'react';
import { Container, Nav, NavDropdown, Navbar, Form, Button, Overlay } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css'


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
   
    const [show, setShow] = useState(false);
    const target = useRef(null);
    
    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => console.log(error))
    }
    return (

        <Container className='mw-100 bg-dark' >
            <Navbar collapseOnSelect expand="lg" variant="light" className='w-100'>
                <Container>
                    <Navbar.Brand href="#"> <img src="https://img.freepik.com/premium-vector/chef-icon-logo-vector-design-template_827767-1604.jpg?w=2000" className='justify-content-left rounded rounded-circle' style={{ width: 60 }} alt="" /> <span className='h2 text-white'> Hunger's Solution</span> </Navbar.Brand>

                </Container>
                <Container>

                    <Navbar.Toggle className='bg-white' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/* When a user is visiting the link. the link becomes active (yellow color) */}
                        <Nav className="mx-auto">
                            <ActiveLink to='/'>Home</ActiveLink>
                            <ActiveLink to='/blog'>Blog</ActiveLink>
                            <ActiveLink to='/about'>About</ActiveLink>
                        </Nav>
                        <Nav>
                            {/* When a logged user is in the site then the user profile pic and the logout button show on the navbar as well as user hover on the profile pic show his/her name through a tooltip. when there is no user the login button show only */}
                            {
                                user ? <span className='text-white'><img onClick={() => setShow(!show)} ref={target} style={{ width: 35 }} className='rounded rounded-circle' src={user?.photoURL} alt="" />
                                    <Overlay target={target.current} show={show} placement="left">
                                        {({
                                            placement: _placement,
                                            arrowProps: _arrowProps,
                                            show: _show,
                                            popper: _popper,
                                            hasDoneInitialMeasure: _hasDoneInitialMeasure,
                                            ...props
                                        }) => (
                                            <div
                                                {...props}
                                                style={{
                                                    position: 'absolute',
                                                    backgroundColor: 'gray',
                                                    padding: '2px 10px',
                                                    marginLeft: '10px',
                                                    marginRight: '10px',
                                                    color: 'white',
                                                    borderRadius: 3,
                                                    ...props.style,
                                                }}
                                            >
                                                {user.displayName}
                                            </div>
                                        )}
                                    </Overlay>
                                    <Button variant="secondary" className='mx-4 px-3' onClick={handleLogout}>Log Out</Button></span> : <Link to='/login'><Button variant="secondary" className='px-3'>Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>

    );
};

export default Header;