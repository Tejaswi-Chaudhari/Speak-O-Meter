import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import "./Header.css"
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <>
            <Navbar expand="lg" variant="dark" bg="primary" className="navbar">
                <LinkContainer to="/">
                    <Navbar.Brand className="ml-xs-2">Speak-O-Meter</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/exercise">
                            <Nav.Link className="link">Exercise</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link className="link">Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </>
    )
}

export default Header
