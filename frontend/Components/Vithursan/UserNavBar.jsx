import React, { Component } from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
export default class UserNavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">SLIIT ICAF</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="/">Register</Nav.Link>
                <Nav.Link href="#pricing">Download</Nav.Link>
                </Nav>
            
            </Navbar>
            </div>
        )
    }
}
