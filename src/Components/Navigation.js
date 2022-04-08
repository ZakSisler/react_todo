import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navigation() {
  const { currentUser, login, logout } = useAuth();
  return (
    <Navbar variant="dark" bg="dark" expand="md" className="p-3">
      <Navbar.Brand href="/">ToDoApp</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-auto">
          {currentUser && (
            <>
              <Link to="/" className="nav-link">
                Login
              </Link>
              <Link to="/todo" className="nav-link">
                Todo
              </Link>
              <Link to="/categories" className="nav-link">
                Categories
              </Link>
            </>
          )}
          {currentUser ? (
            <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
          ) : (
            <Nav.Link onClick={() => login()}>Login</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
