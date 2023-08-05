import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import { useStateContext } from '../context';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { logoutUserFn } from '../api/authApi';


export default function NavBar() {
    const stateContext = useStateContext();
    const user = stateContext.state.authUser;

    const { mutate: logoutUser, isLoading } = useMutation(
        async () => await logoutUserFn(),
        {
          onSuccess: (data) => {
            window.location.href = '/login';
          },
          onError: (error: any) => {
            if (Array.isArray(error.response.data.error)) {
              error.data.error.forEach((el: any) =>
                toast.error(el.message, {
                  position: 'top-right',
                })
              );
            } else {
              toast.error(error.response.data.message, {
                position: 'top-right',
              });
            }
          },
        }
      );

    const onLogoutHandler = async () => {
        logoutUser();
      };

    return (
        <Navbar bg="light" expand="lg" className="navbar">
            {user && (
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                <Nav.Item>
                    <Nav.Link href="/scrutinMaj">Majoritaire</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/scrutinClass">Classement</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/scrutinChoice">Sélection</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/scrutinNote">Note</Nav.Link>
                </Nav.Item>       
                <Nav.Item>
                    <Nav.Link href="/scrutinW">Poids</Nav.Link>
                </Nav.Item>  
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/profile">{user.name}</Nav.Link>
                    </Nav>
                    <Navbar.Text className="justify-content-end">
                        
                        <Nav.Link href="/login" className="nav-link" onClick={onLogoutHandler}>
                            LogOut
                        </Nav.Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            )}  
            {!user && (
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link href="/login">Login</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/register">Sign Up</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                )}
        </Navbar>
    )
}