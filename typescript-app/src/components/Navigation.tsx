import React from "react";
import { Link } from 'react-router-dom';
// import { Typography } from '@material-ui/core';
import { Nav, Navbar } from "react-bootstrap";
import Logo from "../icons/logo.svg";
declare module "*.svg";

const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/"><img alt="" src={Logo} width="30" height="30" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Typography component={Link} to="/subflow">Subflow</Typography>
                    <Typography component={Link} to="/neuralweightvirtualization">Neural Weight Virtualization</Typography> */}
                    <Nav.Link as={Link} to="/subflow">Subflow</Nav.Link>
                    <Nav.Link as={Link} to="/neuralweightvirtualization">Neural Weight Virtualization</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;