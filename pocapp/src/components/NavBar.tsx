import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import IUser from "../types/user.type";


interface Props{
    user:IUser | undefined,
    logOut: () => void
}

export default function NavBar(props:Props) {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {props.user ? (
                <div>
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
                <Nav.Item>
                    <Nav.Link href="/profile">{props.user.username}</Nav.Link>
                </Nav.Item>    
                </Nav>
                <Nav className="justify-content-end">
                    <Navbar.Text className="justify-content-end">
                        <a href="/login" className="nav-link" onClick={props.logOut}>
                            LogOut
                        </a>
                    </Navbar.Text>
                </Nav>
                </div>
                ) : (
                <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <div>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Sign Up</Nav.Link>
                    </div>
                </Nav>
                </Navbar.Collapse>
                )}
            </Container>
        </Navbar>
    )
}