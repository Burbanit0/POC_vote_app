import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import { useUser } from "../utils/userContext";


export default function NavBar() {
    let user = useUser();

    return (
        <Navbar bg="light" expand="lg">
            {user.currentUser ? (
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                <Nav.Item>
                    <Nav.Link href="/scrutinMaj">Scrutin Majoritaire</Nav.Link>
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
                        <Nav.Link href="/profile">{user.currentUser.username}</Nav.Link>
                    </Nav>
                    <Navbar.Text className="justify-content-end">
                        
                        <Nav.Link href="/login" className="nav-link" onClick={user.logOut}>
                            LogOut
                        </Nav.Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            ) : (
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